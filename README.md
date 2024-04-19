## How to start 

### Node.js Compatibility
Important: Cucumber requires Node.js version 18 or any version greater than or equal to 20.

- Install dependencies: **npm install**
- Run the app: **python -m http.server 8000**
- Run tests: **npm run test**

## Project Overview

The application under test is a front-end application that allows a user to create a list of questions by adding them one by one. The questions can be filtered or removed from the list by the user. The application also allows showing and hiding answers and displays a count of the listed questions.

## Analysis and Planning

The key features of the application were identified through exploratory testing.

- **Features Breakdown**:
  - Create questions
  - Remove questions
  - Count questions
  - Sort questions

## Technical Solution

- **Testing Tools and Languages**:
  - Playwright
  - Cucumber
  - TypeScript

- **Design Patterns**:
  - **BDD (Behavior Driven Development)** approach is chosen to provide a readable solution.
  - **POM (Page Object Model)** approach is chosen to provide scalability and easy maintenance.
  - Playwright Test is based on the concept of test fixtures; hence, fixtures are used as a convenient test environment setup.

- **Reporting**:
  - Cucumber reports

- **CI Tools**:
  - For the scope of the assignment, GitHub Actions is chosen for the convenience of providing easy access to run the tests
