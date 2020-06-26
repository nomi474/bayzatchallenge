import viewTeamPO from "./viewTeamPO";


export function searchEmployee(preferredName){
    cy.get(viewTeamPO.searchEmployee).type(preferredName + '{enter}')
}

export function selectEmployeeRecord(){
    cy.get(viewTeamPO.selectEmployeeCheckbox).click()
}

export function deleteEmployee(){
    cy.get(viewTeamPO.deleteButton).click()
    cy.get(viewTeamPO.confirmDelete).click()
}

export function deleteEmployeeRecord(preferredName){
    searchEmployee(preferredName)
    cy.wait(4000)
    selectEmployeeRecord()
    deleteEmployee()
}

