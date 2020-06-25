import loginPagePO from "./loginPagePO";

export function enterUsername(userName){
    cy.get(loginPagePO.userNameInput).type(userName)
}

export function enterPassword(password){
    cy.get(loginPagePO.passwordInput).type(password)
}

export function clickLoginButton(){
    cy.get(loginPagePO.loginBtn).click()
}
