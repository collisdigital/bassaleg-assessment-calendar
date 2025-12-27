import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data.json');

const SUBJECTS_Y10 = ['Maths', 'English', 'Science', 'History', 'Geography', 'Art'];
const SUBJECTS_Y11 = ['Maths', 'English Lit', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
const SUBJECTS_Y12 = ['Psychology', 'Sociology', 'Economics', 'Further Maths'];

const TYPES_COMMON = { 'Exam': '#EF4444' };
const TYPES_Y10 = { ...TYPES_COMMON, 'Mock': '#F59E0B', 'Coursework': '#3B82F6' };
const TYPES_Y11 = { ...TYPES_COMMON, 'Practical': '#10B981', 'Speaking': '#8B5CF6' };
const TYPES_Y12 = { ...TYPES_COMMON, 'Essay': '#EC4899', 'Presentation': '#6366F1' };

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

function generateYearData(yearName, subjects, types) {
    const typeKeys = Object.keys(types);
    // Fixed start date: Monday, Sept 1st 2025
    const startDate = new Date('2025-09-01T12:00:00Z');

    const schedule = [];
    const numWeeks = 20;
    const totalDays = numWeeks * 7;

    const insetWeekIndex = getRandomInt(5, 15);

    let currentWeekNum = 1;

    for (let i = 0; i < totalDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        const weekIndex = Math.floor(i / 7);
        const isInsetWeek = weekIndex === insetWeekIndex;
        const isRandomInset = (i > 0 && i % 25 === 0);
        const isInset = !isWeekend && (isInsetWeek || isRandomInset);

        const dayRecord = {
            date: currentDate.toISOString(),
            week: isWeekend ? null : `Week ${currentWeekNum}`,
            isInset: isInset,
            assessments: []
        };

        if (!isWeekend && !isInset) {
            // Force first day assessment
            if (i === 0) {
                 const hasMaths = subjects.includes('Maths');
                 const hasExam = typeKeys.includes('Exam');

                 if (hasMaths && hasExam) {
                     dayRecord.assessments.push({
                        subject: 'Maths',
                        type: 'Exam',
                        label: `${yearName} Maths Exam - Topic: Algebra`,
                    });
                 } else {
                     // Fallback
                     const fallbackSub = subjects[0];
                     const fallbackType = typeKeys[0];
                     dayRecord.assessments.push({
                        subject: fallbackSub,
                        type: fallbackType,
                        label: `${yearName} ${fallbackSub} ${fallbackType} - Intro`,
                    });
                 }
            }

            // Normal random generation
            const numAssessments = getRandomInt(0, 3);

            for (let j = 0; j < numAssessments; j++) {
                const type = getRandomItem(typeKeys);
                const subject = getRandomItem(subjects);

                // Add random Markdown formatting for testing
                let subjStr = subject;
                let topicStr = `Topic: ${getRandomItem(['Topic A', 'Topic B', 'Topic C', 'Topic D'])}`;

                if (j === 0 && i % 5 === 0) { // Occasional bold
                    subjStr = `**${subject}**`;
                } else if (j === 1 && i % 7 === 0) { // Occasional italic
                    topicStr = `_${topicStr}_`;
                } else if (j === 2 && i % 11 === 0) { // Occasional mixed
                    subjStr = `**${subject}**`;
                    topicStr = `_${topicStr}_`;
                }

                const label = `${yearName} ${subjStr} ${type} - ${topicStr}`;

                dayRecord.assessments.push({
                    subject: subject,
                    type: type,
                    label: label,
                });
            }
        }

        if (currentDate.getDay() === 0) {
            currentWeekNum++;
        }

        schedule.push(dayRecord);
    }

    return {
        name: yearName,
        filename: `${yearName} Assessment Calendar`,
        sourceUrl: `http://example.com/${yearName}`,
        types: types,
        schedule: schedule
    };
}

const appData = {
    generatedAt: new Date().toISOString(),
    years: {
        'year-10': generateYearData('Year 10', SUBJECTS_Y10, TYPES_Y10),
        'year-11': generateYearData('Year 11', SUBJECTS_Y11, TYPES_Y11),
        'year-12': generateYearData('Year 12', SUBJECTS_Y12, TYPES_Y12)
    }
};

export function writeTestData() {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(appData, null, 2));
    console.log(`Test data generated at ${OUTPUT_FILE}`);
}

if (process.argv[1] === __filename) {
    writeTestData();
}
