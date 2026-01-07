import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE_PATH = path.join(__dirname, '../src/data.json');
const REMOTE_BRANCH = 'origin/gh-pages';
const REMOTE_FILE_PATH = 'data.json'; // Root of gh-pages

// Helper to get arguments
const args = process.argv.slice(2);
const dateArgIndex = args.indexOf('--date');
const targetDate = dateArgIndex !== -1 ? args[dateArgIndex + 1] : null;

function getGitFileContent(branch, filePath, date) {
    try {
        let commitHash = branch;

        if (date) {
            // Find last commit on or before the date
            const cmd = `git rev-list -n 1 --before="${date} 23:59:59" ${branch}`;
            try {
                commitHash = execSync(cmd, { encoding: 'utf-8' }).trim();
                if (!commitHash) {
                    return null; // No commit found before date
                }
            } catch (e) {
                console.error(`Error finding commit for date ${date}: ${e.message}`);
                return null;
            }
        }

        // Fetch file content
        const content = execSync(`git show ${commitHash}:${filePath}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
        return JSON.parse(content);
    } catch {
        // Only return null if the error is likely "file not found" or "branch not found"
        // console.error(e.message);
        return null;
    }
}

function normalizeAssessment(a) {
    // subject|type|date|label
    // Date: keep ISO string (assuming generated consistent)
    return `${a.subject}|${a.type}|${a.date}|${a.label}`;
}

function compareYears(newYear, oldYear) {
    const changes = {
        types: [],
        added: [],
        removed: []
    };

    // Compare Types (Colors)
    const newTypes = newYear.types || {};
    const oldTypes = oldYear.types || {};
    const allTypeKeys = new Set([...Object.keys(newTypes), ...Object.keys(oldTypes)]);

    allTypeKeys.forEach(key => {
        const newVal = newTypes[key];
        const oldVal = oldTypes[key];
        if (newVal !== oldVal) {
            if (!oldVal) changes.types.push(`Added Type **${key}**: \`${newVal}\``);
            else if (!newVal) changes.types.push(`Removed Type **${key}** (was \`${oldVal}\`)`);
            else changes.types.push(`Changed Type **${key}**: \`${oldVal}\` -> \`${newVal}\``);
        }
    });

    // Compare Schedule
    // Flatten schedule to list of assessments
    const newAssessments = newYear.schedule.flatMap(day => day.assessments.map(a => ({ ...a, date: day.date })));
    const oldAssessments = oldYear.schedule.flatMap(day => day.assessments.map(a => ({ ...a, date: day.date })));

    const newSet = new Set(newAssessments.map(normalizeAssessment));
    const oldSet = new Set(oldAssessments.map(normalizeAssessment));

    // Added
    newAssessments.forEach(a => {
        const sig = normalizeAssessment(a);
        if (!oldSet.has(sig)) {
            changes.added.push(a);
        }
    });

    // Removed
    oldAssessments.forEach(a => {
        const sig = normalizeAssessment(a);
        if (!newSet.has(sig)) {
            changes.removed.push(a);
        }
    });

    return changes;
}

function formatDate(isoStr) {
    return isoStr.split('T')[0];
}

(async () => {
    // 1. Load Local Data
    if (!fs.existsSync(DATA_FILE_PATH)) {
        console.error("Error: src/data.json not found.");
        process.exit(1);
    }
    const newData = JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'));

    // 2. Load Remote Data
    console.log(`Comparing against ${targetDate ? `state on ${targetDate}` : 'latest deployed version'}...`);
    const oldData = getGitFileContent(REMOTE_BRANCH, REMOTE_FILE_PATH, targetDate);

    if (!oldData) {
        console.log("## Data Comparison");
        console.log("No previous data found to compare against (or branch/file missing). Assuming strictly new data.");
        // Optional: List everything as added? For now, just exit.
        process.exit(0);
    }

    // 3. Compare
    console.log("## Assessment Data Changes");
    if (targetDate) {
        console.log(`*Comparison against data from ${targetDate}*`);
    }

    let hasChanges = false;
    const allYears = new Set([...Object.keys(newData.years), ...Object.keys(oldData.years)]);

    for (const yearId of allYears) {
        const newYear = newData.years[yearId];
        const oldYear = oldData.years[yearId];

        if (!newYear) {
            console.log(`\n### ${oldYear.name} (${yearId})`);
            console.log("**YEAR REMOVED**");
            hasChanges = true;
            continue;
        }
        if (!oldYear) {
            console.log(`\n### ${newYear.name} (${yearId})`);
            console.log("**YEAR ADDED**");
            hasChanges = true;
            continue;
        }

        const changes = compareYears(newYear, oldYear);

        if (changes.types.length > 0 || changes.added.length > 0 || changes.removed.length > 0) {
            hasChanges = true;
            console.log(`\n### ${newYear.name}`);

            if (changes.types.length > 0) {
                console.log("#### Types Changed");
                changes.types.forEach(c => console.log(`- ${c}`));
            }

            if (changes.added.length > 0) {
                console.log("#### Added Assessments");
                changes.added.forEach(a => {
                    console.log(`- **${formatDate(a.date)}**: ${a.subject} - ${a.label} (${a.type})`);
                });
            }

            if (changes.removed.length > 0) {
                console.log("#### Removed Assessments");
                changes.removed.forEach(a => {
                    console.log(`- **${formatDate(a.date)}**: ${a.subject} - ${a.label} (${a.type})`);
                });
            }
        }
    }

    if (!hasChanges) {
        console.log("\nNo changes detected.");
    }

})();
