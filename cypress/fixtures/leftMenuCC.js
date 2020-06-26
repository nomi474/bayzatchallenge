import leftMenuPO from "./leftMenuPO";
import loginPagePO from "./loginPagePO";


export function selectAddEmployeesSideMenuItem() {
    // cy.get(leftMenuPO.addEmployees).scrollIntoView()
    cy.get(leftMenuPO.addEmployees).click({ animationDistanceThreshold: 20 })
}

export function clickViewTeamSideMenuItem() {
    cy.get(leftMenuPO.viewTeam).each(($el, index, $list) => {
        if ($el.text() === "View Team") {
            $el.click()
        } else {
            cy.log("View Team menu item not found")
        }
    })
}

export function logout() {
    cy.get(leftMenuPO.logOutLink).click()
    cy.get(loginPagePO.loginBtn).should('be.visible')
}