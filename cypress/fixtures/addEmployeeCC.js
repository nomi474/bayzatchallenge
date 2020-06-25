import addEmployeePO from "./addEmployeePO";


export function enterPreferredName(preferredName) {
    cy.get(addEmployeePO.preferredName).type(preferredName)
}

export function enterFirstName(firstName) {
    cy.get(addEmployeePO.firstName).type(firstName)
}

export function enterLastName(lastName) {
    cy.get(addEmployeePO.lastName).type(lastName)
}

export function enterDateOfBirth(dateOfBirth) {
    cy.get(addEmployeePO.dateOfBirth).type(dateOfBirth)
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function selectNationality(nationality) {
    cy.get(addEmployeePO.nationality).contains("Please select nationality").type(nationality)
    cy.get('.ember-power-select-option').click()
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function selectgender(gender) {
    cy.get(addEmployeePO.gender).contains("Please select gender").type(gender)
    cy.get('[aria-current="true"]').click()
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function enterMobileNumber(mobile) {
    cy.get(addEmployeePO.mobile).type(mobile)
}

export function enterEmailAddress(email) {
    cy.get(addEmployeePO.workEmail).type(email)
}

export function enterWorkPhone(phone) {
    cy.get(addEmployeePO.workPhone).type(phone)
}

export function enterJobTitle(title) {
    cy.get(addEmployeePO.jobTitle).type(title)
}

export function enterHiringDate(hiringDate) {
    cy.get(addEmployeePO.hiringDate).type(hiringDate)
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function enterProbationEndDate(probationEndDate) {
    cy.get(addEmployeePO.probationEndDate).type(probationEndDate)
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function selectCountryOfResidence(country) {
    cy.get(addEmployeePO.countryOfResidence).contains("Please select country of residence").type(country)
    cy.get('.ember-power-select-option').click()
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function selectVisaLocation(location) {
    cy.get(addEmployeePO.residenceVisaLocation).contains("Please select visa location").click()
    cy.get('li.ember-power-select-option').each(($el, index, $list) => {
        if ($el.text() === location) {
            $el.click()
        } else {
            cy.log(location + " not found")
        }
    })
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function selectTradeLicense() {
    cy.get(addEmployeePO.tradeLicense).contains("Please select trade license").type('Test')
    cy.get('.ember-power-select-option').click()
    cy.get(addEmployeePO.selectForm).click({ force: true })
}

export function enterLabourNum(labourNum) {
    cy.get(addEmployeePO.labourNum).type(labourNum)
}

export function selectEmployeeNotInsured() {
    cy.get(addEmployeePO.currentlyInsuredNo).click()
}

export function clickCreateEmployeeButton() {
    cy.get(addEmployeePO.createEmployeeBtn).click()
}