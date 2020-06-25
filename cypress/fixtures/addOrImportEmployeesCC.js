import addOrImportEmployeesPO from "./addOrImportEmployeesPO";

export function clickAddEmployeesBtn(){
    cy.get(addOrImportEmployeesPO.addEmployees).click({ force: true })
}