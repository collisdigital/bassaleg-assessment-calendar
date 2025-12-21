import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data.json');

const SUBJECTS = ['Maths', 'English', 'Science', 'History', 'Geography', 'Art', 'Computer Science'];
const TYPES = {
    '#EF4444': 'Exam',
    '#F59E0B': 'Mock',
    '#3B82F6': 'Coursework',
    '#10B981': 'Quiz'
};
const TYPE_KEYS = Object.keys(TYPES);

// Seeded Random Number Generator
let seed = 123456;
function seededRandom() {
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296; // 2^32
    seed = (a * seed + c) % m;
    return seed / m;
}

function getRandomInt(min, max) {
    return Math.floor(seededRandom() * (max - min + 1)) + min;
}

function getRandomItem(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

function generateYearData(yearName) {
    // Fixed start date: Monday, Sept 1st 2025
    const startDate = new Date('2025-09-01T12:00:00Z');

    // Ensure it's a Monday (Sept 1 2025 is a Monday)
    const dayOfWeek = startDate.getDay();
    if (dayOfWeek !== 1) {
         // Adjust if needed, but 2025-09-01 is Monday.
    }

    const schedule = [];
    const numWeeks = 20; // Approx 5 months
    const totalDays = numWeeks * 7;

    // Pick a random week for half-term/inset week (between week 5 and 15)
    const insetWeekIndex = getRandomInt(5, 15);

    let currentWeekNum = 1;

    for (let i = 0; i < totalDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        const weekIndex = Math.floor(i / 7);
        const isInsetWeek = weekIndex === insetWeekIndex;

        // Random INSET day once per month (approx every 30 days), if not already inset week
        const isRandomInset = (i > 0 && i % 25 === 0);

        const isInset = !isWeekend && (isInsetWeek || isRandomInset);

        const dayRecord = {
            date: currentDate.toISOString(),
            week: isWeekend ? null : `Week ${currentWeekNum}`, // Simple week numbering
            isInset: isInset,
            assessments: []
        };

        if (!isWeekend && !isInset) {
            // Generate assessments
            // To ensure consistency for tests, let's force the first day (Sept 1st)
            // to always have a specific assessment if it's the first day of loop.
            if (i === 0) {
                 dayRecord.assessments.push({
                    subject: 'Maths',
                    type: 'Exam',
                    label: `${yearName} Maths Exam - Topic: Algebra`,
                    color: '#EF4444' // Red
                });
            }

            // Normal random generation
            const numAssessments = getRandomInt(0, 3);

            for (let j = 0; j < numAssessments; j++) {
                const color = getRandomItem(TYPE_KEYS);
                const subject = getRandomItem(SUBJECTS);
                dayRecord.assessments.push({
                    subject: subject,
                    type: TYPES[color],
                    label: `${yearName} ${subject} ${TYPES[color]} - Topic: ${getRandomItem(['Algebra', 'Poetry', 'Cells', 'WWII', 'Rivers', 'Coding'])}`,
                    color: color
                });
            }
        }

        // Increment week number on Sundays
        if (currentDate.getDay() === 0) {
            currentWeekNum++;
        }

        schedule.push(dayRecord);
    }

    return {
        name: yearName,
        filename: `${yearName} Assessment Calendar`,
        sourceUrl: `http://example.com/${yearName}`,
        types: TYPES,
        schedule: schedule
    };
}

const appData = {
    generatedAt: new Date().toISOString(),
    years: {
        'year-10': generateYearData('Year 10'),
        'year-11': generateYearData('Year 11'),
        'year-12': generateYearData('Year 12')
    }
};

export function writeTestData() {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(appData, null, 2));
    console.log(`Test data generated at ${OUTPUT_FILE}`);
}

// Allow running directly
if (process.argv[1] === __filename) {
    writeTestData();
}
