# Rentzila Automation Project

Automation testing project for [Rentzila](https://dev.rentzila.com.ua/) using Cypress, TypeScript, and Faker.

## Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project aims to automate testing for the Rentzila web application. Using Cypress for writing and running tests, TypeScript for type safety, and Faker for generating random data, this setup provides robust automation for quality assurance.

## Technologies

- [Cypress](https://www.cypress.io/) - End-to-end testing framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe programming language
- [Faker](https://github.com/faker-js/faker) - Library for generating random data
- [GitHub](https://github.com/) - Version control system for code management

## Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) version 14.x or newer
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

## Installation

1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd your-project
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and add your environment variables:

```plaintext
BASE_URL=https://dev.rentzila.com.ua/
USER_LOGIN=<your_login>
USER_PASSWORD=<your_password>
```

## Running Tests
- To run tests in the Cypress GUI:
```bash
npm run cypress:open
```
- To run tests in the CLI:
```bash
npm run cypress:run
```

## Project Structure
```bash
/your-project-root
├── cypress
│   ├── e2e                     # Directory for e2e tests
│   ├── fixtures                # Test data
│   ├── plugins                 # Plugin configurations
│   └── support                 # Functions, commands, and helpers
├── .env                        # Environment variables
├── cypress.config.ts           # Cypress configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project description
```

## Scripts
Add the following scripts to your package.json file for running tests:
```json
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "cypress:headless": "cypress run --headless",
    "cypress:record": "cypress run --record --key <your_cypress_dashboard_key>",
    "cypress:spec": "cypress run --spec 'cypress/e2e/**/*.cy.ts'"
}
```
- cypress:open: Opens the Cypress Test Runner GUI.
- cypress:run: Runs all tests in the CLI.
- cypress:headless: Runs all tests in headless mode.
- cypress:record: Runs and records tests in Cypress Dashboard (requires a Dashboard key).
- cypress:spec: Runs specific test files using a glob pattern.

## Contributing
- Fork this repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

```javascript
This `README.md` now includes a `Scripts` section with detailed information about the different Cypress test run configurations available.
```






