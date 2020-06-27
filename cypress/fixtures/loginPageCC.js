import loginPagePO from "./loginPagePO";

    /**
     * 
     * @param {*} userName 
     */
    export function enterUsername(userName){
        cy.get(loginPagePO.userNameInput).should('be.visible')
        cy.get(loginPagePO.userNameInput).should('have.attr','placeholder', 'Email Address')
        cy.get(loginPagePO.userNameInput).type(userName)
    }

    /**
     * 
     * @param {*} password 
     */    
    export function enterPassword(password){
        cy.get(loginPagePO.passwordInput).should('be.visible')
        cy.get(loginPagePO.passwordInput).should('have.attr','placeholder', 'Password')
        cy.get(loginPagePO.passwordInput).type(password)
    }

    /**
     * 
     */
    export function clickLoginButton(){
        cy.get(loginPagePO.loginBtn).should('be.visible') 
        cy.get(loginPagePO.loginBtn).should('have.attr','type', 'submit')
        cy.get(loginPagePO.loginBtn).click()
    }
