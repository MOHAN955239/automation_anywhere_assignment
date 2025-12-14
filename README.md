
# Automation Anywhere – Playwright UI & API Automation Assignment
## 📌 Overview
This project demonstrates UI and API automation using Playwright with TypeScript, created as part of the Automation Anywhere technical assignment.

The automation validates UI workflows on the Automation Anywhere Community portal and provides a basic API test structure following automation best practices.
## 🛠️ Tech Stack
- Playwright
- TypeScript
- Node.js
- Git & GitHub
## 📂 Project Structure
automation_anywhere_assignment/
│
├── tests/
│   ├── api/
│   │   └── learningInstance.spec.ts
│   └── ui/
│       ├── createMessageBoxTask.spec.ts
│       └── formWithUpload.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
## ▶️ How to Run the Tests

### Install dependencies
```bash
npm install
npx playwright test

---

## 6️⃣ Authentication Note (VERY IMPORTANT)
```md
## 🔐 Authentication Note
Some Automation Anywhere community features require SSO authentication.

To follow security best practices:
- No real credentials are committed
- Tests detect restricted access gracefully
- `.env.example` is provided to show secure configuration

This ensures the project is safe, stable, and compliant with security guidelines.

