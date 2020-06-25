/// <reference types="Cypress" />

describe('add and delete employees', function () {
    it('opens bayzat website', function () {
        cy.visit('https://www.bayzat.com')
        //click on Login menu item
        cy.get('div#gatsby-focus-wrapper a > span.style__TextWrap-sc-58yt2r-1.hGkEF > span').click()
        cy.get('input[name="username"]').type('test+testcompany@bayzat.com')
        cy.get('input[name="password"]').type('123456789')
        cy.get('form > button').click()
        cy.wait(2000)
        //click on Add employees menu item
        cy.get("a[href='/enterprise/dashboard/import-users']").scrollIntoView()
        cy.get("a[href='/enterprise/dashboard/import-users']").click({animationDistanceThreshold: 20})
        //click on Add new employee
        //:visible is needed for correctly identifying the button
        cy.wait(2000)
        cy.get("a[href='/enterprise/dashboard/employees/create']:visible").click({ force: true })
        cy.get('input[name="preferredName"]').type('Ertugrul Ghazi')
        cy.get('input[name="firstName"]').type('Ertugrul')
        cy.get('input[name="lastName"]').type('Bey')
        cy.get('input[name="dateOfBirthFormatted"]').type('25/04/1989')
        cy.get('form[role="form"]').click({ force: true })
        //select nationality
        cy.get('.ember-power-select-placeholder').contains("Please select nationality").type('Turkish')
        cy.get('.ember-power-select-option').click()
        cy.get('form[role="form"]').click({ force: true })
        //select gender
        cy.get('.ember-power-select-placeholder').contains("Please select gender").type('Male')
        cy.get('[aria-current="true"]').click()
        cy.get('form[role="form"]').click({ force: true })
        //Enter phone number
        cy.get('input[name="mobileNumber"]').type('+971529040789')
        //Enter email address
        cy.get('input[name="workEmail"]').type('work.email@gmail.com')
        //Enter work number
        cy.get('input[name="officeNumber"]').type('+971425896475')
        //Enter work title
        cy.get('input[name="position"]').type('Senior Software Test Engineer')
        //Enter hiring date
        cy.get('input[name="hiredAtFormatted"]').type('15/06/2017')
        cy.get('form[role="form"]').click({ force: true })
        //Enter probation end date
        cy.get('input[name="probationEndDateFormatted"]').type('15/12/2017')
        cy.get('form[role="form"]').click({ force: true })
        //select country of residence
        cy.get('.ember-power-select-placeholder').contains("Please select country of residence").type('United Arab')
        cy.get('.ember-power-select-option').click()
        cy.get('form[role="form"]').click({ force: true })
        //select visa location
        cy.get('.ember-power-select-placeholder').contains("Please select visa location").click()
        cy.get('li.ember-power-select-option').each(($el, index, $list) => {
            if ($el.text()==="Dubai") {
                $el.click()
            }else{
                console.log("Dubai not found")
            }
        })
        cy.get('form[role="form"]').click({ force: true })
        //select trade license
        cy.get('.ember-power-select-placeholder').contains("Please select trade license").type('Test')
        cy.get('.ember-power-select-option').click()
        cy.get('form[role="form"]').click({ force: true })
        cy.get('input[name="ministryOfLabourId"]').type('12345678901234')
        cy.get('button:nth-child(1) > i').click()
        cy.get('div.col-sm-11.col-md-10.col-lg-8.mar-ver > div > div > button:nth-child(2)').click()
        cy.wait(3000)
        cy.get('span.main-menu__title.js-main-menu__title').each(($el, index, $list) => {
            if ($el.text()==="View Team") {
                $el.click()
            }else{
                console.log("View Team menu item not found")
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
