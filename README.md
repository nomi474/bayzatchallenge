<p align="center">
    <h1 align="center">Repository for Bayzat's technical challenge</h1>
    <br />
    <a href="https://www.bayzat.com">
</p>

## Table of Contents
* [Setting up project](#Setting-up-project)
* [Make file](#make-file)
* [Test execution](#test-execution)
  * [Execute tests with Cypress GUI](#execute-tests-with-cypress-ui)
  * [Execute tests in terminal](#execute-tests-in-terminal)
* [Project Structure](#project-structure)
    

## Setting up project
1. Clone the repository
    ```text
    https://github.com/nomi474/bayzatchallenge
    ```
2. Open the terminal (project ./root_dir) and execute the command below:
    ```text
    make
    ```
3. After the script is done, you will have all the dependencies and cypress GUI will pops-out
 
 ## Make file
 You can find make file in the root of the project, you can practice it by running the below:
 
 1- Check what commands you have by executing:
 ```text
make help
``` 
 2- Upgrade your dependencies to latest:
 ```text
make upgrade
``` 
 1- Set up the project:
 ```text
make
```   

## Cypress Execution commands
### Execute tests with Cypress GUI
1. To open cypress GUI and run tests
```
yarn run cypress open
```
2. After the application started, you can:
    - select a test file to execute (*.spec.js)
    - Run all tests with `Run all specs` button

### Execute tests in terminal
- Open the terminal (in the project folder)
    - To execute test cases in a specific `*.spec.js` file, execute the following command:
        ```
        npx cypress run -s ./cypress/integration/bayzatHome/index.js --headed
        ```
    - To execute all `*.spec.js` files under a folder, execute the following command:
        ```
        npx cypress run -s ./cypress/integration/bayzatHome/* --headed

## Project Structure (Cypress Dir)
```text
├── fixtures
├── integration
    └── bayzatHome
        └── index.js
```
