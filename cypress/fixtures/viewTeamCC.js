import viewTeamPO from "./viewTeamPO";

    /**
     * 
     * @param {*} preferredName 
     */
    export function searchEmployee(preferredName){
        cy.get(viewTeamPO.searchEmployee).should('be.visible')
        cy.get(viewTeamPO.searchEmployee).type(preferredName + '{enter}')
    }

    /**
     * 
     */
    export function selectEmployeeRecord(){
        cy.get(viewTeamPO.selectEmployeeCheckbox).should('be.visible')
        cy.get(viewTeamPO.selectEmployeeCheckbox).click()
        cy.get(viewTeamPO.clearFilters).should('be.visible')
    }

    /**
     * 
     */
    export function deleteEmployee(){
        cy.get(viewTeamPO.deleteButton).should('be.visible')
        cy.get(viewTeamPO.deleteButton).click()
        cy.get(viewTeamPO.confirmDelete).should('be.visible')
        cy.get(viewTeamPO.confirmDelete).click()
        cy.wait(5000)
    }

    /**
     * 
     */
    export function clearFilters(){
        cy.get(viewTeamPO.clearFilters).click()
        cy.get(viewTeamPO.searchEmployee).should('be.empty')
        cy.wait(5000)
    }

    /**
     * 
     * @param {*} preferredName 
     */
    export function deleteEmployeeRecord(preferredName){
        searchEmployee(preferredName)
        cy.wait(4000)
        selectEmployeeRecord()
        deleteEmployee()
        clearFilters()
    }

