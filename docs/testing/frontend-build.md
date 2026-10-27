# Frontend Build

This guide explains how to install dependencies, run, and build the MvuviGo web dashboard.

## 1. Prerequisites

Ensure Node.js, npm, and Git are installed.

```bash
node --version
npm --version
```

## 2. Install Dependencies

Navigate to the frontend directory containing `package.json` and run:

```bash
npm ci
```

If `package-lock.json` does not exist, use `npm install`.

## 3. Configure Environment

Configure the required environment variables, including the backend API URL, if applicable. Keep secrets in local environment files and out of version control.

## 4. Run the Application

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## 5. Build for Production

```bash
npm run build
```

Resolve any compilation errors before deploying.

## 6. Troubleshooting

- **Missing dependencies:** Run `npm ci`.
- **Build errors:** Check the terminal output.
- **API connection failures:** Verify the backend URL and availability.
- **Tests failing:** Review the test output and fix the underlying issue.

## 7. Verification

- [ ] Dependencies install successfully.
- [ ] The dashboard starts and loads correctly.
- [ ] API integration works.
- [ ] The production build completes successfully.

**Note:** Use the scripts defined in the project's `package.json`.
