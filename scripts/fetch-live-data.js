import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const debugMode = process.argv.includes('--debug');

const OUTPUT_FILE = path.join(__dirname, '../src/data.json');
const CONFIG_FILE = path.join(__dirname, 'years-config.json');

// Read Config
let yearsConfig = [];
try {
    const configFileContent = fs.readFileSync(CONFIG_FILE, 'utf-8');
    yearsConfig = JSON.parse(configFileContent);
} catch (e) {
    console.error("Failed to read years config:", e);
    process.exit(1);
}

const COL_DATE = 2; // B
const COL_WEEK = 3; // C
const COL_INSET = 4; // D
const COL_SUBJECT_START = 5; // E

// Colors
const NOTE_COLOR = '#E5E7EB'; // CSS Hex for Note (Gray-200)

// Helper to normalize Color to CSS Hex
function normalizeColor(value) {
  if (!value) return null;
  let hex = value.toString();
  // If Excel returns ARGB (8 chars), e.g., FFE5E7EB, strip alpha (first 2 chars)
  if (hex.length === 8) {
      hex = hex.substring(2);
  }
  // Ensure hash prefix
  if (!hex.startsWith('#')) {
      hex = '#' + hex;
  }
  return hex.toUpperCase(); // Standardize to uppercase
}

// Helper to convert rich text to Markdown, correctly handling state.
function richTextToMarkdown(richText) {
    if (!richText || !Array.isArray(richText)) return '';

    let markdown = '';
    let isBoldOpen = false;
    let isItalicOpen = false;

    for (const fragment of richText) {
        const text = fragment.text || '';
        const font = fragment.font || {};
        const shouldBeBold = !!font.bold;
        const shouldBeItalic = !!font.italic;

        // Close bold tag if the style ends
        if (isBoldOpen && !shouldBeBold) {
            markdown += '**';
            isBoldOpen = false;
        }
        // Close italic tag if the style ends
        if (isItalicOpen && !shouldBeItalic) {
            markdown += '_';
            isItalicOpen = false;
        }
        
        // Separate whitespace from core text
        const leadingSpace = text.match(/^\s*/)[0];
        const trailingSpace = text.match(/\s*$/)[0];
        const coreText = text.substring(leadingSpace.length, text.length - trailingSpace.length);

        // Append leading space, applying styles if any are open
        markdown += leadingSpace;

        if (coreText) {
            // Open bold tag if a new bold section starts
            if (!isBoldOpen && shouldBeBold) {
                markdown += '**';
                isBoldOpen = true;
            }
            // Open italic tag if a new italic section starts
            if (!isItalicOpen && shouldBeItalic) {
                markdown += '_';
                isItalicOpen = true;
            }
            markdown += coreText;
        }

        // Append trailing space, applying styles if any are open
        markdown += trailingSpace;
    }

    // Close any remaining open tags
    if (isBoldOpen) {
        markdown += '**';
    }
    if (isItalicOpen) {
        markdown += '_';
    }

    return markdown;
}

// Helper to extract text from cell value (handling Rich Text)
function getCellValue(cell) {
    const val = cell.value;
    if (!val) return null;

    // Handle Rich Text
    if (typeof val === 'object') {
        if (val.richText && Array.isArray(val.richText)) {
            const text = richTextToMarkdown(val.richText);
            if (debugMode) console.log(`TRACE: getCellValue - Converted richText cell to Markdown. Original: %o, Result: ${text}`, val);
            return text;
        }
        // Handle Hyperlink { text: '...', hyperlink: '...' }
        if (val.text) {
            if (debugMode) console.log(`TRACE: getCellValue - Extracted text from hyperlink cell. Original: %o, Result: ${val.text}`, val);
            return val.text;
        }
        // Handle Date object
        if (val instanceof Date) {
            const isoDate = val.toISOString();
            if (debugMode) console.log(`TRACE: getCellValue - Converted Date object to ISO string. Original: %o, Result: ${isoDate}`, val);
            return isoDate;
        }
    }

    return val.toString();
}

async function downloadSheet(url, downloadPath) {
  console.log(`Downloading spreadsheet from ${url}...`);
  // Append export format if not present
  const downloadUrl = url.endsWith('/export?format=xlsx') ? url : `${url}/export?format=xlsx`;

  const response = await fetch(downloadUrl);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);

  let sheetFilename = null;
  // Try to extract filename from Content-Disposition header
  const contentDisposition = response.headers.get('content-disposition');
  if (contentDisposition) {
      const filenameStarMatch = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
      if (filenameStarMatch && filenameStarMatch[1]) {
          sheetFilename = decodeURIComponent(filenameStarMatch[1]);
      } else {
          const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
          if (filenameMatch && filenameMatch[1]) {
              sheetFilename = filenameMatch[1].replace(/\+/g, ' ');
          }
      }
  }

  if (sheetFilename) {
      console.log(`Detected filename: ${sheetFilename}`);
      sheetFilename = sheetFilename.replace(/\.xlsx$/i, ''); // Clean extension
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(downloadPath, Buffer.from(arrayBuffer));
  console.log('Download complete.');
  return sheetFilename;
}

async function parseSheet(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet(1); // Assuming first sheet

  // 1. Discover Columns and Key Location
  const subjects = [];
  let colKeyType = -1;
  const row1 = sheet.getRow(1);

  console.log('Scanning columns...');
  for (let c = COL_SUBJECT_START; c <= 50; c++) {
      const cell = row1.getCell(c);
      let val = getCellValue(cell);
      val = val ? val.trim() : '';

      if (!val && cell.master) {
          const masterVal = getCellValue(cell.master);
          if (masterVal) val = masterVal.trim();
      }

      if (val.toLowerCase() === 'key') {
          colKeyType = c;
          console.log(`Found Key at Column ${c}`);
          break;
      }

      if (val) {
          subjects[c] = val;
          console.log(`Column ${c}: ${val}`);
      }
  }

  if (colKeyType === -1) {
      console.error('ERROR: "Key" header column not found in the spreadsheet. It is required.');
      process.exit(1);
  }

  // 2. Parse Legend/Key
  // Map: Color (Hex) -> Type (String) used for lookup during row parsing
  const colorToTypeMap = {};
  // Map: Type (String) -> Color (Hex) used for final output
  const outputTypes = {};

  console.log('Parsing Key...');
  for (let r = 2; r <= 20; r++) {
      const cell = sheet.getCell(r, colKeyType);
      const fill = cell.fill;
      const val = getCellValue(cell);

      if (val && fill && fill.type === 'pattern' && fill.fgColor) {
          const typeName = val.trim();
          const colorHex = normalizeColor(fill.fgColor.argb);

          if (colorHex) {
            // Check for duplicate type names with different colors
            if (outputTypes[typeName] && outputTypes[typeName] !== colorHex) {
                console.warn(`WARNING: Duplicate Key found for type "${typeName}" with different color! Existing: ${outputTypes[typeName]}, New: ${colorHex}. Keeping existing.`);
            } else {
                outputTypes[typeName] = colorHex;
                // Also store reverse mapping for lookup
                colorToTypeMap[colorHex] = typeName;
                console.log(`Found Type: ${typeName} = ${colorHex}`);
            }
          }
      }
  }

  // Ensure "Note" type exists
  if (!outputTypes['Note']) {
      outputTypes['Note'] = NOTE_COLOR;
      colorToTypeMap[NOTE_COLOR] = 'Note';
      console.log(`Added default Type: Note = ${NOTE_COLOR}`);
  } else if (outputTypes['Note'] !== NOTE_COLOR) {
      console.warn(`WARNING: "Note" type already defined with color ${outputTypes['Note']}. Keeping it, but expected ${NOTE_COLOR}.`);
  }

  // 3. Parse Data Rows
  const data = [];
  let currentYear = 2025; // TODO: Maybe make this configurable or smarter?
  let lastMonthIndex = 8; // Starts in Sept

  const MAX_ROWS = 1000;

  for (let r = 2; r <= MAX_ROWS; r++) {
      const row = sheet.getRow(r);
      const dateCell = row.getCell(COL_DATE);
      const dateVal = dateCell.value;

      // Stop if empty date
      if (!getCellValue(dateCell)) {
          if (!getCellValue(row.getCell(COL_WEEK))) {
             break;
          }
          continue;
      }

      // Date Parsing
      let dateObj = null;
      if (dateCell.value instanceof Date) {
          dateObj = dateCell.value;
      } else {
          // Regex for "3rd Nov", "3 Nov", "3rt Nov" etc.
          // Matches: Number, optional rubbish, Month Name
          // Relaxed to allow any chars between number and month
          const dateRegex = new RegExp(
              "(\\d+)" +       // Day number
              ".*?\\s+" +      // Any characters (non-greedy) followed by whitespace
              "([a-zA-Z]+)",   // Month name
              "i"              // Case insensitive
          );
          const dateStr = getCellValue(dateCell);
          const match = dateStr.match(dateRegex);

          if (match) {
             const day = parseInt(match[1]);
             const monthStr = match[2];
             const months = {
                 jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
                 jul:6, aug:7, sep:8, sept:8, oct:9, nov:10, dec:11
             };
             const monthIndex = months[monthStr.toLowerCase().substr(0,3)];

             if (monthIndex !== undefined) {
                 // If we cross from December (11) to January (0), increment year
                 if (lastMonthIndex === 11 && monthIndex === 0) {
                     currentYear++;
                 // Heuristic for academic year rollover: if month goes significantly backwards (e.g., Sep to Jan), increment year
                 } else if (lastMonthIndex > monthIndex && (lastMonthIndex - monthIndex) > 6) {
                    currentYear++;
                 }

                 lastMonthIndex = monthIndex;
                 dateObj = new Date(currentYear, monthIndex, day);
             }
          }
      }

      if (!dateObj || isNaN(dateObj.getTime())) {
          console.warn(`Row ${r}: Could not parse date '${dateVal}'`);
          continue;
      }

      const weekCell = row.getCell(COL_WEEK);
      const isInset = !!getCellValue(row.getCell(COL_INSET));

      const dayRecord = {
          date: dateObj.toISOString(),
          week: getCellValue(weekCell),
          isInset: isInset,
          assessments: []
      };

      // Check Subject Columns
      for(let c = COL_SUBJECT_START; c < colKeyType; c++) {
          const subject = subjects[c];
          if (!subject) continue;

          const cell = row.getCell(c);

          // Check for merge master to avoid duplicates
          if (cell.master && cell.master.address !== cell.address) {
              continue;
          }

          const rawText = getCellValue(cell);
          const hasText = rawText && rawText.trim().length > 0;

          if (hasText) {
              const fill = cell.fill;
              let type = 'Note';
              let color = NOTE_COLOR; // For lookup only

              if (fill && fill.type === 'pattern' && fill.fgColor) {
                  const normalizedColor = normalizeColor(fill.fgColor.argb);
                  if (normalizedColor) {
                    color = normalizedColor;
                    if (colorToTypeMap[color]) {
                        type = colorToTypeMap[color];
                    } else {
                        // Unknown color
                        type = 'Other';
                        console.warn(`WARNING: Unknown color ${color} found for subject ${subject} at column ${c} row ${r}. Assigning type "Other".`);

                        // Add Other to output definitions if not present
                        if (!outputTypes['Other']) {
                             outputTypes['Other'] = color;
                             // We don't add to colorToTypeMap to prevent "Other" from swallowing other valid identical colors if they appear later in the Key (unlikely but safe)
                        }
                    }
                  }
              }

              const label = rawText.trim();

              dayRecord.assessments.push({
                  subject: subject,
                  type: type,
                  label: label
              });
          }
      }

      data.push(dayRecord);
  }

  return { types: outputTypes, schedule: data };
}

(async () => {
    const appData = {
        generatedAt: new Date().toISOString(),
        years: {}
    };

    console.log(`Starting multi-year build... Found ${yearsConfig.length} years config.`);

    for (const year of yearsConfig) {
        console.log(`\n--- Processing ${year.name} (${year.id}) ---`);

        const sheetUrl = year.sheetUrl;

        if (!sheetUrl) {
            console.warn(`No URL found for ${year.id}. Skipping.`);
            continue;
        }

        const downloadPath = path.join(__dirname, `temp_${year.id}.xlsx`);

        try {
            const filename = await downloadSheet(sheetUrl, downloadPath);
            const data = await parseSheet(downloadPath);

            appData.years[year.id] = {
                name: year.name, // Add name from config
                filename: filename || `${year.name} Assessment Calendar`,
                sourceUrl: sheetUrl,
                types: data.types, // Type -> Color mapping
                schedule: data.schedule
            };

            // Cleanup
            if (fs.existsSync(downloadPath)) {
                fs.unlinkSync(downloadPath);
            }
        } catch (e) {
            console.error(`Failed to process ${year.id}:`, e);
            process.exit(1);
        }
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(appData, null, 2));
    console.log(`\nTotal Success! Data saved to ${OUTPUT_FILE}`);
})();
