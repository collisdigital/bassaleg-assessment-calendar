# Bassaleg Assessment Calendar

A web application designed to visualize assessment timetables for Year 10 and Year 11 students at Bassaleg School. The application automatically generates interactive calendars and timeline views from Google Sheets data.

[**View Live Site**](https://collisdigital.github.io/bassaleg-assessment-calendar/)

## 🚀 Features

- **Dual Views**: Toggle between a monthly calendar grid and a linear timeline view.
- **Filtering**: Filter assessments by subject and assessment type (e.g., Exam, Mock, NEA).
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Automated Data Updates**: The build process fetches the latest data directly from managed Google Sheets.
- **Multi-Year Support**: Deploys separate instances for Year 10 and Year 11 with a unified landing page.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Processing**: [Node.js](https://nodejs.org/) & [ExcelJS](https://github.com/exceljs/exceljs)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

## VC Project Structure

```text
/
├── .github/workflows/   # CI/CD pipelines (Deploy Assessment Timetables)
├── scripts/             # Data fetching and parsing scripts
│   ├── download-and-parse.js  # Main script to fetch Google Sheet & generate JSON
│   ├── year-10-sheet-url.txt  # Source URL for Year 10
│   └── year-11-sheet-url.txt  # Source URL for Year 11
├── src/                 # React application source
│   ├── components/      # UI Components (Calendar, Timeline, Filters)
│   ├── hooks/           # Custom hooks (useData)
│   ├── types.ts         # TypeScript definitions
│   └── App.tsx          # Main application component
├── index.html           # Entry point
└── package.json         # Dependencies and scripts
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/collisdigital/bassaleg-assessment-calendar.git
   cd bassaleg-assessment-calendar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Linting

To check code style and catch potential errors:

```bash
npm run lint
```

This command uses ESLint with TypeScript and React-specific rules to ensure code quality and consistency.

### Running Locally

To start the development server:

```bash
npm run dev
```

This will start the Vite dev server, typically at `http://localhost:5173`.
*Note: The app requires `src/data.json` to exist. If missing, run the data script first (see below).*

### generating Data

The application relies on `src/data.json`, which is generated from the Google Sheet.

To generate the data locally using the default Year 10 sheet:

```bash
node scripts/download-and-parse.js
```

To generate data for a specific sheet (e.g., Year 11):

```bash
export SHEET_URL=$(cat scripts/year-11-sheet-url.txt)
node scripts/download-and-parse.js
```

### Building for Production

To build the application:

```bash
npm run build
```

This will compile the TypeScript code and bundle the assets into the `dist/` directory.

## 🧪 Testing

Run the test suite with Vitest:

```bash
npm run test
```

## ⚙️ Configuration

The application uses the following environment variables (mostly used during the build/data generation phase):

- `SHEET_URL`: The URL of the Google Sheet to process (without `/export?format=xlsx`).
- `VITE_APP_TITLE`: Sets the title displayed in the application header (e.g., "Year 10 Assessment Calendar").

## 🚀 Deployment (GitHub Actions)

The repository is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

The workflow `.github/workflows/deploy-timetables.yml` performs the following steps:

1.  **Checkout & Setup**: Sets up the Node.js environment.
2.  **Build Year 10**:
    -   Reads the URL from `scripts/year-10-sheet-url.txt`.
    -   Runs `download-and-parse.js` to generate `src/data.json`.
    -   Builds the React app with base path `/bassaleg-assessment-calendar/year-10/`.
3.  **Build Year 11**:
    -   Reads the URL from `scripts/year-11-sheet-url.txt`.
    -   Runs `download-and-parse.js` to generate `src/data.json`.
    -   Builds the React app with base path `/bassaleg-assessment-calendar/year-11/`.
4.  **Create Landing Page**: Copies `.github/workflows/landing-page.html` to the root `index.html`.
5.  **Deploy**: Pushes the combined artifacts to the `gh-pages` branch.

## 📄 License

[MIT](LICENSE)
