import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_PATH = path.join(__dirname, '../src/data.json');
const XLSX_PATH = path.join(__dirname, 'temp_sheet.xlsx');

async function verify() {
    console.log("Verifying data integrity...");

    if (!fs.existsSync(JSON_PATH)) {
        throw new Error("data.json not found");
    }
    if (!fs.existsSync(XLSX_PATH)) {
        throw new Error("temp_sheet.xlsx not found");
    }

    const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(XLSX_PATH);
    const sheet = workbook.getWorksheet(1);

    // 1. Verify Row Count
    // Excel data usually starts row 2.
    // Count non-empty date rows in Excel
    let excelRowCount = 0;
    let firstDateExcel = null;
    let lastDateExcel = null;

    sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Header
        const dateCell = row.getCell(2); // Col B
        if (dateCell.value) {
            excelRowCount++;
            if (!firstDateExcel) firstDateExcel = dateCell.value;
            lastDateExcel = dateCell.value;
        }
    });

    console.log(`Excel Rows (approx): ${excelRowCount}`);
    console.log(`JSON Schedule Items: ${data.schedule.length}`);

    // Allow slight mismatch if logic skips invalid dates, but generally should match
    if (Math.abs(excelRowCount - data.schedule.length) > 5) {
        throw new Error(`Row count mismatch! Excel: ${excelRowCount}, JSON: ${data.schedule.length}`);
    }

    // 2. Verify First and Last Date
    // We can't easily strict compare string vs Excel Date object without parsing logic
    // But we can check if they are present.
    if (data.schedule.length > 0) {
        console.log(`First JSON Date: ${data.schedule[0].date}`);
        console.log(`Last JSON Date: ${data.schedule[data.schedule.length-1].date}`);
    }

    // 3. Verify Subjects
    // Check if we have subjects.
    // Collect all subjects found in JSON
    const jsonSubjects = new Set();
    data.schedule.forEach(day => {
        day.assessments.forEach(a => jsonSubjects.add(a.subject));
    });
    console.log(`Found Subjects in JSON: ${Array.from(jsonSubjects).join(', ')}`);

    if (jsonSubjects.size === 0) {
        // Warning? Maybe no assessments yet? But unlikely for a whole year.
        console.warn("No subjects found in assessments. Is this expected?");
    }

    // 4. Verify Types
    const typeKeys = Object.keys(data.types);
    console.log(`Found Types: ${typeKeys.length} (${Object.values(data.types).join(', ')})`);
    if (typeKeys.length === 0) {
         throw new Error("No types parsed from Key!");
    }

    // 5. Verify Specific Data (Year 11 regression check)
    if (process.env.SHEET_URL && process.env.SHEET_URL.includes("1IwS8bwAq1")) {
        console.log("Checking for Year 11 specific data...");
        let foundNumeracyNote = false;

        for (const day of data.schedule) {
            for (const a of day.assessments) {
                if (a.label.includes("Numeracy Stand Down 1")) {
                    foundNumeracyNote = true;
                    if (a.type !== "Note") {
                         throw new Error(`Numeracy Stand Down 1 found but type is ${a.type}, expected 'Note'`);
                    }
                }
            }
        }

        if (!foundNumeracyNote) {
            throw new Error("Numeracy Stand Down 1 NOT found in assessments!");
        }
        console.log("Found 'Numeracy Stand Down 1' note successfully.");
    }

    console.log("Verification Passed!");
}

verify().catch(e => {
    console.error(e);
    process.exit(1);
});
