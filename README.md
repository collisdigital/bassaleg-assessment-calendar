# Bassaleg Assessment Calendar

A web application designed to visualize assessment timetables for Year 10 and Year 11 students at Bassaleg School. The application automatically generates interactive calendars and timeline views from Google Sheets data.

[**View Live Site**](https://collisdigital.github.io/bassaleg-assessment-calendar/)

## 🚀 Features

- **Dual Views**: Toggle between a monthly calendar grid and a linear timeline view.
- **Filtering**: Filter assessments by subject and assessment type (e.g., Exam, Mock, NEA).
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Automated Data Updates**: The build process fetches the latest data directly from managed Google Sheets.
- **Multi-Year Support**: Supports Year 10, Year 11, and more in a single application with client-side routing.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Processing**: [Node.js](https://nodejs.org/) & [ExcelJS](https://github.com/exceljs/exceljs)
- **Testing**: [Vitest](https://vitest.dev/) (Unit), [Playwright](https://playwright.dev/) (E2E) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

## VC Project Structure

```text
/
├── .github/workflows/   # CI/CD pipelines
├── e2e/                 # End-to-End tests (Playwright)
├── scripts/             # Data scripts
│   ├── compare-data.js       # Compares local data with deployed data
│   ├── fetch-live-data.js    # Fetches real Google Sheets data
│   ├── generate-test-data.js # Generates deterministic mock data
│   └── years-config.json     # Configuration for year groups
├── src/                 # React application source
│   ├── components/      # UI Components
│   ├── hooks/           # Custom hooks
│   └── App.tsx          # Main router component
├── index.html           # Entry point
└── package.json         # Dependencies and scripts
```

## 🏁 Getting Started

The fastest way to start contributing:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/collisdigital/bassaleg-assessment-calendar?quickstart=1)

This provides:

* A pre-configured VS Code environment (with useful extensions installed)
* All required dependencies installed
* Automatic port forwarding for preview
* Git integration

Once you have successfully launched Codespaces, dependencies will be automatically
installed. You can start the development server from the VS Code Terminal:

```bash
npm run dev
```

You will be prompted to **Open in Browser** to view the locally running site.

See the [Quickstart Guide](http://docs.github.com/en/codespaces/quickstart) for
more information.

Note: It can take a few minutes to fully launch Codespaces the first time, but
is faster on subsequent launches as the environment is then cached.

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

### Data Generation

The application relies on `src/data.json`. You can generate this data in two ways:

1.  **Generate Test Data (For Development):**
    Creates deterministic test data for Year 10, 11, and 12.
    ```bash
    npm run data:generate
    ```

2.  **Fetch Live Data (For Production):**
    Downloads and parses the Google Sheets defined in `scripts/years-config.json`.
    ```bash
    npm run data:fetch
    ```

3.  **Compare Data:**
    Compares the current local `src/data.json` with the deployed version on the `gh-pages` branch.
    ```bash
    # Compare against latest deployed version
    npm run data:compare

    # Compare against version deployed on or before a specific date
    npm run data:compare -- --date 2023-12-25
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```

This will start the Vite dev server, typically at `http://localhost:5173`.

### Linting

To check code style and catch potential errors:

```bash
npm run lint
```

### Building for Production

To build the application:

```bash
npm run build
```

This will compile the TypeScript code and bundle the assets into the `dist/` directory.

## 🧪 Testing

### Unit Tests

Run the unit test suite with Vitest:

```bash
npm run test
```

### End-to-End (E2E) Tests

Run the E2E tests with Playwright (Chromium only):

```bash
# Run headless (CI mode)
npm run test:e2e

# Run with UI reporter
npm run test:e2e:ui
```

## 🚀 Deployment (GitHub Actions)

The repository is configured to automatically deploy to GitHub Pages on every push to the `main` branch via `.github/workflows/deploy-timetables.yml`.

The workflow:
1.  Sets up Node.js.
2.  Fetches live data (`npm run data:fetch`).
3.  Compares the new data with the previously deployed version (`npm run data:compare`) and outputs a summary to the GitHub Actions log.
4.  Builds the Single Page Application (`npm run build`).
5.  Archives the raw data (`cp src/data.json dist/data.json`) to preserve history.
6.  Deploys the `dist` folder to the `gh-pages` branch.

## 📄 License

[MIT](LICENSE)
