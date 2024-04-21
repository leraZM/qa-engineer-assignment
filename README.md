## How to Start

### Node.js Compatibility
**Important**: Cucumber requires Node.js version 18 or any version greater than or equal to 20.

- **Install dependencies:** `npm install`
- **Run the app:** `python -m http.server 8000`
- **Run tests:** `npm run test`

## Project Overview

The application under test is a front-end application that allows a user to create a list of questions by adding them one by one. Users can filter or remove questions from the list. Additionally, the application allows users to show and hide answers and displays a count of the listed questions.

## Analysis and Planning

The key features of the application were identified through exploratory testing.

- **Feature Breakdown**:
  - Create questions
  - Remove questions
  - Count questions
  - Sort questions

## Automated Testing Strategy

Acceptance testing evaluates whether a system meets its business and user requirements.

In the scope of the current project, acceptance tests are end-to-end tests involving the UI layer that cover major user scenarios and ensure fast feedback to the development team. Acceptance tests can run locally, against a release environment, and in a CI tool. To provide the fastest feedback, it's possible to tag tests for smoke/regression testing or run tests on-demand per feature.

For the efficiency of testing, the browser's headless mode is set as the default.

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
  ![Test report](<Test report.png>)

- **CI Tools**:
  - In the scope of the assignment, GitHub Actions is chosen for the convenience of providing easy access to run the tests.

## Suggestions for Improvements:

- **Testing Notes (to discuss with the team)**:
  1. When a user clicks the 'Remove questions' button, should it also affect the default question?
  2. The 'Sort questions' button can be omitted when there is only one question since it has no effect.
  3. Consider adding validation rules to the form (valid characters, minimum/maximum length, etc.).

  ![text overflow](<docs/Screenshot_1.png>)

  ![white spaces](<docs/Screenshot_2.png>)
