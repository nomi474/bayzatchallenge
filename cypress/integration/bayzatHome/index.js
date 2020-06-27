/// <reference types="Cypress" />

import * as bayzatHomeCC from "../../fixtures/bayzatHomeCC"
import * as loginPageCC from "../../fixtures/loginPageCC"
import * as leftMenuCC from "../../fixtures/leftMenuCC"
import * as addOrImportEmployeesCC from "../../fixtures/addOrImportEmployeesCC"
import * as addEmployeeCC from "../../fixtures/addEmployeeCC"
import * as viewTeamCC from "../../fixtures/viewTeamCC"
import * as leftMenuPO from "../../fixtures/leftMenuPO"

describe('add and delete employees test suite', function () {
    it('add and delete employees test case', function () {
        bayzatHomeCC.visitHomePage()
        //click on Login menu item
        bayzatHomeCC.selectLoginMenuItem()
        loginPageCC.enterUsername('test+testcompany@bayzat.com')
        loginPageCC.enterPassword("123456789")
        loginPageCC.clickLoginButton()
        cy.wait(5000)
        //click on Add employees menu item
        leftMenuCC.selectAddEmployeesSideMenuItem()

        //click on Add new employee
        addOrImportEmployeesCC.clickAddEmployeesBtn()
        let employeeData1 = new Map([
            ["dob", '25/04/1989'],
            ["nationality", 'Turkish'],
            ["gender", 'Male'],
            ["hiringDate", '15/06/2017'],
            ["probationEndDate", '15/12/2017'],
            ["residentCountry", 'United Arab'],
            ["visaLocation", 'Dubai'],
            ["tradeLicense", 'Test'],
            ["addMore", 'true'],
        ])
        let preferredName1 = addEmployeeCC.addNewEmployee(employeeData1)
        let employeeData2 = new Map([
            ["dob", '15/11/1993'],
            ["nationality", 'Emirati'],
            ["gender", 'Female'],
            ["hiringDate", '11/01/2015'],
            ["probationEndDate", '11/05/2015'],
            ["residentCountry", 'Turkey'],
            ["visaLocation", 'no'],
            ["tradeLicense", 'no'],
            ["addMore", 'false'],
            ["labourNum", 'no']
        ])
        let preferredName2 = addEmployeeCC.addNewEmployee(employeeData2)
        leftMenuCC.clickViewTeamSideMenuItem()
        cy.wait(5000)
        viewTeamCC.deleteEmployeeRecord(preferredName1)
        viewTeamCC.deleteEmployeeRecord(preferredName2)
        leftMenuCC.logout()
    })
})
