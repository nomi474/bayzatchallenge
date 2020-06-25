import sideMenuPO from "./sideMenuPO";


export function selectAddEmployeesSideMenuItem(){
    // cy.get(sideMenuPO.addEmployees).scrollIntoView()
    cy.get(sideMenuPO.addEmployees).click({animationDistanceThreshold: 20})
}