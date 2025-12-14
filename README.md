
# Automation Anywhere – UI & API Automation (Playwright)

## Framework
Playwright + TypeScript

## Design Pattern
Page Object Model (POM)

## Setup
1. Install Node.js (LTS)
2. Open project in VS Code
3. Run `npm install`
4. Run `npx playwright install`
5. Rename `.env.example` to `.env` and add credentials

## Run Tests
- All tests: `npm test`
- UI tests: `npm run test:ui`
- API tests: `npm run test:api`
- Report: `npm run report`

## Note
Selectors and API endpoints depend on the Automation Anywhere tenant.
Update locators after inspecting the UI.
