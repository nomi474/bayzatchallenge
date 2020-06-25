import bayzatHomePO from "./bayzatHomePO";


/**
 * This function takes you to Bayzat's home page.
 */
export function visitHomePage(){
    cy.visit('https://www.bayzat.com')
}

/**
 * This function clicks on the Login menu item from home page
 */
export function selectLoginMenuItem(){
    cy.get(bayzatHomePO.loginMenuItem).click();
}