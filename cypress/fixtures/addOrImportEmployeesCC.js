import addOrImportEmployeesPO from "./addOrImportEmployeesPO";
    /**
     * Clicking on the button below will take you to 'Add Employee' page.
     */
    export function clickAddEmployeesBtn(){
        cy.get(addOrImportEmployeesPO.addEmployees).should('have.text', 'Add Employee')
        cy.get(addOrImportEmployeesPO.addEmployees).should('be.visible')
        cy.get(addOrImportEmployeesPO.addEmployees).click({ force: true })
    }