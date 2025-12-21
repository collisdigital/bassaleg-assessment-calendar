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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

function generateYearData(yearName) {
    const startDate = new Date();
    // Start from the beginning of the current week to align nicely
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek + 1); // Monday

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
        // Simple logic: if day index % 30 == 0 (and not weekend)
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
            // Requirement: "at least 5 assessments per week".
            // We'll aim for avg 1 per day, but random.
            // Let's say 20% chance of 0, 40% chance of 1, 30% chance of 2, 10% chance of 3.

            // To ensure 5 per week approx, we need avg 1 per day.
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
