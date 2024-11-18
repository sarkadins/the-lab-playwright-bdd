# The Lab - Playwright BDD

[![Contributors][contributors-shield]][contributors-url]
[![GitHub Forks][forks-shield]][forks-url]
[![GitHub Stars][stars-shield]][stars-url]
[![GitHub Issues][issues-shield]][issues-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

A Behavior-Driven Development (BDD) testing framework built using [Playwright](https://playwright.dev/), designed to create end-to-end tests with structured, human-readable scenarios. This project simplifies automated testing by combining Playwright's powerful capabilities with BDD-style test cases.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Built with](#built-with)

---

## Overview

This repository demonstrates how to integrate Playwright with BDD principles, making test cases more accessible and easy to understand. It is perfect for teams practicing Agile or those focused on collaboration between developers, testers, and stakeholders.

---

## Features

- **Playwright Integration:** Leverage Playwright for reliable browser automation.
- **BDD Syntax:** Write tests in plain English using Gherkin syntax (`.feature` files).
- **Cross-Browser Testing:** Support for Chromium, Firefox, and WebKit.
- **Robust Reporting:** Generate detailed test reports for better visibility.
- **Scalable Design:** Easily extendable for additional test cases or projects.

---

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sarkadins/the-lab-playwright-bdd.git
   cd the-lab-playwright-bdd
2. Install dependencies

    ```bash
    npm install
3. Ensure you have Node.js (v16 or above) and npm installed on your system.

---

## Usage
### Running Tests

- To execute the tests, run the following command: 

    ```bash
    npm test
- For a spesific browser use:

  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
### Debug mode

- Run tests in debug mode for easier troubleshooting:

  ```bash
  npx playwright test --debug
### Generate Reports

- View test results with detailed reporting:

  ```bash
  npx playwright show-report
---

## Built With

This project leverages the following technologies:

- [![Cucumber](https://img.shields.io/badge/Cucumber-BDD-green?logo=cucumber&logoColor=white)](https://cucumber.io/)
- [![Playwright](https://img.shields.io/badge/Playwright-End--to--End-blue?logo=microsoft-edge&logoColor=white)](https://playwright.dev/)
- [![Playwright-BDD](https://img.shields.io/badge/Playwright--BDD-Integration-yellow)](https://www.npmjs.com/package/playwright-bdd/v/5.1.1)
- [![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)


[contributors-shield]: https://img.shields.io/github/contributors/sarkadins/the-lab-playwright-bdd
[contributors-url]: https://github.com/sarkadins/the-lab-playwright-bdd/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sarkadins/the-lab-playwright-bdd
[forks-url]: https://github.com/sarkadins/the-lab-playwright-bdd/forks
[stars-shield]: https://img.shields.io/github/stars/sarkadins/the-lab-playwright-bdd
[stars-url]: https://github.com/sarkadins/the-lab-playwright-bdd/stargazers
[issues-shield]: https://img.shields.io/github/issues/sarkadins/the-lab-playwright-bdd
[issues-url]: https://github.com/sarkadins/the-lab-playwright-bdd/issues
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/soma-sarkadi-nagy/
