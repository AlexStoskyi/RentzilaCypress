# Rentzila Automation Project

Automation testing project for [Rentzila](https://dev.rentzila.com.ua/) using Cypress, TypeScript, and Faker.

## Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)

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

## Scripts 
- To run tests in the Cypress GUI:
```bash
npm run cypress:open
```
- To run tests in the CLI:
```bash
npm run cypress:run
```
