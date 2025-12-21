import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeTestData } from './generate-test-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for --test flag
if (process.argv.includes('--test')) {
    console.log("Running in TEST mode. Generating mock data...");
    writeTestData();
    process.exit(0);
}

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
const NOTE_COLOR = 'FFE5E7EB';

// Helper to normalize ARGB colors from Excel
function normalizeColor(argb) {
  if (!argb) return null;
  return argb;
}

// Helper to extract text from cell value (handling Rich Text)
function getCellValue(cell) {
    const val = cell.value;
    if (!val) return null;

    // Handle Rich Text
    if (typeof val === 'object') {
        if (val.richText && Array.isArray(val.richText)) {
            return val.richText.map(part => part.text).join('');
        }
        // Handle Hyperlink { text: '...', hyperlink: '...' }
        if (val.text) {
            return val.text;
        }
        // Handle Date object
        if (val instanceof Date) {
            return val.toISOString();
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
      const lastSubjectCol = subjects.length - 1;
      colKeyType = lastSubjectCol + 1;
      console.warn(`"Key" header not found. Assuming Column ${colKeyType} (after last subject) is Key.`);
  }

  // 2. Parse Legend/Key
  const typeMap = {};
  console.log('Parsing Key...');
  for (let r = 2; r <= 20; r++) {
      const cell = sheet.getCell(r, colKeyType);
      const val = cell.value;
      const fill = cell.fill;
      if (val && fill && fill.type === 'pattern' && fill.fgColor) {
          const color = normalizeColor(fill.fgColor.argb);
          if (color) {
              typeMap[color] = val.toString().trim();
          }
      }
  }

  if (!Object.values(typeMap).includes('Note')) {
      typeMap[NOTE_COLOR] = 'Note';
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

      if (!dateVal) {
          if (!row.getCell(COL_WEEK).value) {
             break;
          }
          continue;
      }

      let dateObj = null;
      if (dateVal instanceof Date) {
          dateObj = dateVal;
      } else {
          const dateStr = dateVal.toString();
          const match = dateStr.match(/(\d+)(?:st|nd|rd|th|rt|\s)*\s+([a-zA-Z]+)/i);

          if (match) {
             const day = parseInt(match[1]);
             const monthStr = match[2];
             const months = {
                 jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
                 jul:6, aug:7, sep:8, sept:8, oct:9, nov:10, dec:11
             };
             const monthIndex = months[monthStr.toLowerCase().substr(0,3)];

             if (monthIndex !== undefined) {
                 if (lastMonthIndex === 11 && monthIndex === 0) {
                     currentYear++;
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

      const weekVal = row.getCell(COL_WEEK).value;
      const isInset = !!row.getCell(COL_INSET).value;

      const dayRecord = {
          date: dateObj.toISOString(),
          week: weekVal ? weekVal.toString() : null,
          isInset: isInset,
          assessments: []
      };

      for(let c = COL_SUBJECT_START; c < colKeyType; c++) {
          const subject = subjects[c];
          if (!subject) continue;

          const cell = row.getCell(c);

          if (cell.master && cell.master.address !== cell.address) {
              continue;
          }

          const rawText = getCellValue(cell);
          const hasText = rawText && rawText.trim().length > 0;

          if (hasText) {
              const fill = cell.fill;
              let type = 'Note';
              let color = NOTE_COLOR;

              if (fill && fill.type === 'pattern' && fill.fgColor) {
                  const c = normalizeColor(fill.fgColor.argb);
                  if (typeMap[c]) {
                      type = typeMap[c];
                      color = c;
                  }
              }

              const label = rawText.trim();

              dayRecord.assessments.push({
                  subject: subject,
                  type: type,
                  label: label,
                  color: color
              });
          }
      }

      data.push(dayRecord);
  }

  return { types: typeMap, schedule: data };
}

(async () => {
    const appData = {
        generatedAt: new Date().toISOString(),
        years: {}
    };

    console.log(`Starting multi-year build... Found ${yearsConfig.length} years config.`);

    for (const year of yearsConfig) {
        console.log(`\n--- Processing ${year.name} (${year.id}) ---`);

        let sheetUrl = null;
        if (year.sheetUrlFile) {
            try {
                // Config path is relative to repo root, we are in scripts/
                // e.g. "scripts/year-10-sheet-url.txt"
                const urlPath = path.join(__dirname, '..', year.sheetUrlFile);
                if (fs.existsSync(urlPath)) {
                    sheetUrl = fs.readFileSync(urlPath, 'utf-8').trim();
                    console.log(`Read URL from ${year.sheetUrlFile}`);
                } else {
                    console.warn(`URL file not found: ${urlPath}`);
                }
            } catch (e) {
                console.warn(`Could not read URL file for ${year.id}:`, e);
            }
        }

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
                types: data.types,
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
