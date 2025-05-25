import { Given, When, Then, DataTable, And } from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../Page_objects/loginObjects';



//Valid Login 

Given(`I am on the login page`, () => {
cy.log('navigating to the page Login ')   //juste pour indication
cy.visit(loginElements.loginURL)
cy.wait(2000)
cy.get(loginElements.titlecnx).should('contain','Connexion')

});

When(`I enter valid credentials`, () => {
    cy.log('entering valid credencials ')
    cy.get(loginElements.email).type(loginElements.emailinput)
    cy.get(loginElements.password).type(loginElements.passwordinput)
    cy.get(loginElements.submit).click()
});

Then(`I should be redirected to the dashboard`, () => {
    cy.log('Verifying redirection')
    cy.get(loginElements.moncompte).should('contain','Mon compte')
});

//  Invalid_Login

When(`I enter email {string} in the email field`, (email) => {
    if (email){
        cy.get(loginElements.email).type(email);

    }else{
        cy.get(loginElements.email).clear();

    }

});

And(`I enter password {string} in the password field`, (password) => {
    if (password){
        cy.get(loginElements.password).type(password);

    }else{
        cy.get(loginElements.password).clear();

    }
});

And(`I click to the submit button`, () => {
    cy.get(loginElements.submit).click();

});


Then(`I should see the error message {string}`, (message) => {
    cy.log('Verifying displayed error message')
    cy.get(loginElements.alert).should('be.visible').and('contain',message);  

});

