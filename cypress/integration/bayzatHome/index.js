/// <reference types="Cypress" />

import * as bayzatHomeCC from "../../fixtures/bayzatHomeCC"
import * as loginPageCC from "../../fixtures/loginPageCC"
import * as sideMenuCC from "../../fixtures/sideMenuCC"
import * as addOrImportEmployeesCC from "../../fixtures/addOrImportEmployeesCC"
import * as addEmployeeCC from "../../fixtures/addEmployeeCC"
import faker from "faker";
describe('add and delete employees', function () {
    it('opens bayzat website', function () {
        bayzatHomeCC.visitHomePage()
        //click on Login menu item
        bayzatHomeCC.selectLoginMenuItem()
        loginPageCC.enterUsername('test+testcompany@bayzat.com')
        loginPageCC.enterPassword("123456789")
        loginPageCC.clickLoginButton()
        cy.wait(3000)
        //click on Add employees menu item
        sideMenuCC.selectAddEmployeesSideMenuItem()
        cy.wait(2000)
        let employeeData = new Map([
            ["dob",'25/04/1989'],
            ["nationality",'Turkish'],
            ["gender",'Male'],
            ["hiringDate",'15/06/2017'],
            ["probationEndDate",'15/12/2017'],
            ["residentCountry",'United Arab'],
            ["visLocation",'Dubai'],
        ])
        //click on Add new employee
        let firstName = faker.name.firstName().replace(/[^a-zA-Z]/g, "");
        let lastName = faker.name.lastName().replace(/[^a-zA-Z]/g, "");
        let preferredName = firstName + ' ' + lastName

        addOrImportEmployeesCC.clickAddEmployeesBtn()
        addEmployeeCC.enterPreferredName(preferredName)
        addEmployeeCC.enterFirstName(firstName)
        addEmployeeCC.enterLastName(lastName)
        // addEmployeeCC.enterDateOfBirth(faker.date.past(33))
        addEmployeeCC.enterDateOfBirth(employeeData.get("dob"))
        //select nationality
        addEmployeeCC.selectNationality(employeeData.get("nationality"))
        //select gender
        addEmployeeCC.selectgender(employeeData.get("gender"))
        //Enter phone number
        addEmployeeCC.enterMobileNumber(faker.phone.phoneNumberFormat())
        //Enter email address
        addEmployeeCC.enterEmailAddress(faker.internet.email())
        //Enter work number
        addEmployeeCC.enterWorkPhone(faker.phone.phoneNumberFormat())
        //Enter work title
        addEmployeeCC.enterJobTitle(faker.name.jobTitle())        
        //Enter hiring date
        addEmployeeCC.enterHiringDate(employeeData.get("hiringDate"))
        //Enter probation end date
        addEmployeeCC.enterProbationEndDate(employeeData.get("probationEndDate"))
        //select country of residence
        addEmployeeCC.selectCountryOfResidence(employeeData.get("residentCountry"))
        //select visa location
        addEmployeeCC.selectVisaLocation(employeeData.get("visaLocation"))
    
        //select trade license
        addEmployeeCC.selectTradeLicense()
        addEmployeeCC.enterLabourNum(faker.finance.account(14))
        addEmployeeCC.selectEmployeeNotInsured()
        addEmployeeCC.clickCreateEmployeeButton()
        cy.wait(3000)
        cy.get('span.main-menu__title.js-main-menu__title').each(($el, index, $list) => {
            if ($el.text()==="View Team") {
                $el.click()
            }else{
                cy.log("View Team menu item not found")
            }
        })
        cy.wait(5000)
        cy.get('input[placeholder="Search by employee name"]').type(preferredName + '{enter}')
        cy.wait(3000)
        cy.get('tr[role="button"] > td > i.fa.fa-fw.fa-square-o:visible').click()
        cy.get('button.btn.btn-danger.ember-view.mar-rgt--xs.btn-icon > i').click()
        cy.get('div#ember-bootstrap-wormhole button.btn.btn-danger.ember-view').click()
    })
})
