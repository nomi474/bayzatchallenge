import addEmployeePO from "./addEmployeePO";
import faker from "faker";

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
    if (!(location === 'no')) {
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
}

export function selectTradeLicense(tradeLicense) {
    if (!(tradeLicense === "no")) {
        cy.get(addEmployeePO.tradeLicense).contains("Please select trade license").type(tradeLicense)
        cy.get('.ember-power-select-option').click()
        cy.get(addEmployeePO.selectForm).click({ force: true })
    }
}

export function enterLabourNum(labourNum) {
    cy.get(addEmployeePO.labourNum).type(labourNum)
}

export function selectEmployeeNotInsured() {
    cy.get(addEmployeePO.currentlyInsuredNo).click()
}

export function clickCreateEmployeeButton(addMore) {
    if (addMore === "true") {
        cy.get(addEmployeePO.createAndAddAnotherBtn).click()
    } else {
        cy.get(addEmployeePO.createEmployeeBtn).click()
    }
}


export function addNewEmployee(employeeData) {
    let firstName = faker.name.firstName().replace(/[^a-zA-Z]/g, "");
    let lastName = faker.name.lastName().replace(/[^a-zA-Z]/g, "");
    let preferredName = firstName + ' ' + lastName

    enterPreferredName(preferredName)
    enterFirstName(firstName)
    enterLastName(lastName)
    // enterDateOfBirth(faker.date.past(33))
    enterDateOfBirth(employeeData.get("dob"))
    //select nationality
    selectNationality(employeeData.get("nationality"))
    //select gender
    selectgender(employeeData.get("gender"))
    //Enter phone number
    enterMobileNumber(faker.phone.phoneNumberFormat())
    //Enter email address
    enterEmailAddress(faker.internet.email())
    //Enter work number
    enterWorkPhone(faker.phone.phoneNumberFormat())
    //Enter work title
    enterJobTitle(faker.name.jobTitle())
    //Enter hiring date
    enterHiringDate(employeeData.get("hiringDate"))
    //Enter probation end date
    enterProbationEndDate(employeeData.get("probationEndDate"))
    //select country of residence
    selectCountryOfResidence(employeeData.get("residentCountry"))
    //select visa location
    selectVisaLocation(employeeData.get("visaLocation"))

    //select trade license
    selectTradeLicense(employeeData.get("tradeLicense"))
    if (employeeData.get("labourNum") === "no") {
        //do nothing
    } else {
        enterLabourNum(faker.finance.account(14))
    }
    //select radio button for employee insurance.
    selectEmployeeNotInsured()
    clickCreateEmployeeButton(employeeData.get("addMore"))

    return preferredName;
}