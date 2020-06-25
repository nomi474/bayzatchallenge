/// <reference types="Cypress" />

import * as bayzatHomeCC from "../../fixtures/bayzatHomeCC"
import * as loginPageCC from "../../fixtures/loginPageCC"
import * as sideMenuCC from "../../fixtures/sideMenuCC"
import * as addOrImportEmployeesCC from "../../fixtures/addOrImportEmployeesCC"
import * as addEmployeeCC from "../../fixtures/addEmployeeCC"
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
        //click on Add new employee
        addOrImportEmployeesCC.clickAddEmployeesBtn()
        addEmployeeCC.enterPreferredName('Ertugrul Ghazi')
        addEmployeeCC.enterFirstName('Ertugrul')
        addEmployeeCC.enterLastName("Bey")
        addEmployeeCC.enterDateOfBirth('25/04/1989')

        //select nationality
        addEmployeeCC.selectNationality('Turkish')
        //select gender
        addEmployeeCC.selectgender('Male')
        //Enter phone number
        addEmployeeCC.enterMobileNumber("+9715251585854")
        //Enter email address
        addEmployeeCC.enterEmailAddress('work.email@gmail.com')
        //Enter work number
        addEmployeeCC.enterWorkPhone('+971425896475')
        //Enter work title
        addEmployeeCC.enterJobTitle('Senior Software Test Engineer')        
        //Enter hiring date
        addEmployeeCC.enterHiringDate('15/06/2017')
        //Enter probation end date
        addEmployeeCC.enterProbationEndDate('15/12/2017')
        //select country of residence
        addEmployeeCC.selectCountryOfResidence('United Arab')
        //select visa location
        addEmployeeCC.selectVisaLocation("Dubai")
    
        //select trade license
        addEmployeeCC.selectTradeLicense()
        addEmployeeCC.enterLabourNum('12345678901234')
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
        cy.get('input[placeholder="Search by employee name"]').type('Ertugrul{enter}')
        cy.wait(3000)
        cy.get('tr[role="button"] > td > i.fa.fa-fw.fa-square-o:visible').click()
        cy.get('button.btn.btn-danger.ember-view.mar-rgt--xs.btn-icon > i').click()
        cy.get('div#ember-bootstrap-wormhole button.btn.btn-danger.ember-view').click()
    })
})
