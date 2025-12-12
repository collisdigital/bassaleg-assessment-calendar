import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to read default URL from file
function readDefaultUrl() {
    try {
        const urlPath = path.join(__dirname, 'year-10-sheet-url.txt');
        if (fs.existsSync(urlPath)) {
            return fs.readFileSync(urlPath, 'utf-8').trim();
        }
    } catch (e) {
        console.warn("Could not read default URL file:", e);
    }
    return null;
}

const RAW_SHEET_URL = process.env.SHEET_URL || readDefaultUrl();

if (!RAW_SHEET_URL) {
    console.error("Error: No SHEET_URL provided and default file could not be read.");
    process.exit(1);
}

// Append export format if not present
const DOWNLOAD_URL = RAW_SHEET_URL.endsWith('/export?format=xlsx') 
    ? RAW_SHEET_URL 
    : `${RAW_SHEET_URL}/export?format=xlsx`;

const OUTPUT_FILE = path.join(__dirname, '../src/data.json');
const DOWNLOAD_PATH = path.join(__dirname, 'temp_sheet.xlsx');

console.log(`Using Base URL: ${RAW_SHEET_URL}`);

const COL_DATE = 2; // B
const COL_WEEK = 3; // C
const COL_INSET = 4; // D
const COL_SUBJECT_START = 5; // E

let sheetFilename = "Assessment Calendar.xlsx"; // Default fallback

async function downloadSheet() {
  console.log('Downloading spreadsheet...');
  const response = await fetch(DOWNLOAD_URL);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  
  // Try to extract filename from Content-Disposition header
  const contentDisposition = response.headers.get('content-disposition');
  if (contentDisposition) {
      fs.writeFileSync(path.join(__dirname, 'debug_log.txt'), `Content-Disposition: ${contentDisposition}\n`);

      const filenameStarMatch = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
      if (filenameStarMatch && filenameStarMatch[1]) {
          sheetFilename = decodeURIComponent(filenameStarMatch[1]);
      } else {
          const filenameMatch = contentDisposition.match(/filename="?([^\"]+)"?/);
          if (filenameMatch && filenameMatch[1]) {
              sheetFilename = filenameMatch[1].replace(/\+/g, ' ');
          }
      }
  }
  
  console.log(`Detected filename: ${sheetFilename}`);
  fs.appendFileSync(path.join(__dirname, 'debug_log.txt'), `Extracted Filename: ${sheetFilename}\n`);

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(DOWNLOAD_PATH, Buffer.from(arrayBuffer));
  console.log('Download complete.');
}

// Helper to normalize ARGB colors from Excel
function normalizeColor(argb) {
  if (!argb) return null;
  return argb;
}

const NOTE_COLOR = 'FFE5E7EB'; // Light Gray (Tailwind gray-200 approx)

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
            return val.toISOString(); // Or leave as is? We usually parse date cells separately.
        }
    }

    return val.toString();
}

async function parseSheet() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(DOWNLOAD_PATH);
  const sheet = workbook.getWorksheet(1); // Assuming first sheet

  // 1. Discover Columns and Key Location
  // We expect subjects starting at Col 5. We look for "Key" to end.
  const subjects = [];
  let colKeyType = -1;
  const row1 = sheet.getRow(1);

  console.log('Scanning columns...');
  for (let c = COL_SUBJECT_START; c <= 50; c++) {
      const cell = row1.getCell(c);
      let val = getCellValue(cell);
      val = val ? val.trim() : '';

      // Handle Merged Cells (Value usually in master)
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
      // If we didn't find "Key", assume it's the one after the last subject?
      const lastSubjectCol = subjects.length - 1;
      colKeyType = lastSubjectCol + 1;
      console.warn(`"Key" header not found. Assuming Column ${colKeyType} (after last subject) is Key.`);
  }

  // 2. Parse Legend/Key
  const typeMap = {}; // Color -> Type Name
  console.log('Parsing Key...');
  // Scan rows 2 to 20 for key items
  for (let r = 2; r <= 20; r++) {
      const cell = sheet.getCell(r, colKeyType);
      const val = cell.value;
      const fill = cell.fill;
      if (val && fill && fill.type === 'pattern' && fill.fgColor) {
          const color = normalizeColor(fill.fgColor.argb);
          if (color) {
              typeMap[color] = val.toString().trim();
              console.log(`Found Type: ${val} = ${color}`);
          }
      }
  }

  // Ensure "Note" type is registered
  if (!Object.values(typeMap).includes('Note')) {
      typeMap[NOTE_COLOR] = 'Note';
  }

  // 3. Parse Data Rows
  const data = [];
  let currentYear = 2025;
  let lastMonthIndex = 8; // Starts in Sept

  const MAX_ROWS = 1000;

  for (let r = 2; r <= MAX_ROWS; r++) {
      const row = sheet.getRow(r);
      const dateCell = row.getCell(COL_DATE);
      const dateVal = dateCell.value;

      // Stop if empty date
      if (!dateVal) {
          if (!row.getCell(COL_WEEK).value) {
             break;
          }
          continue;
      }

      // Date Parsing
      let dateObj = null;
      if (dateVal instanceof Date) {
          dateObj = dateVal;
      } else {
          // Regex for "3rd Nov", "3 Nov", "3rt Nov" etc.
          // Matches: Number, optional rubbish, Month Name
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

  const output = {
      generatedAt: new Date().toISOString(),
      sourceUrl: RAW_SHEET_URL,
      filename: sheetFilename.replace(/\.xlsx$/i, ''), // Remove extension for display
      types: typeMap,
      schedule: data
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`Success! Parsed ${data.length} days. Saved to ${OUTPUT_FILE}`);
}

(async () => {
    try {
        await downloadSheet();
        await parseSheet();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
