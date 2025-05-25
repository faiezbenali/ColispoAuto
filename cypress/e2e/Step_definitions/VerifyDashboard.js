
import { Given, Then  } from 'cypress-cucumber-preprocessor/steps'
import dashboardElements from '../Page_objects/DashboardObjects';
Given(`I am on the dashboard page`, () => {
    
    cy.log('Navigating to the dashboard page...')
    cy.visit('https://colispo.com')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.title().should('eq', 'Accueil')
    cy.get(dashboardElements.metaDescription)
        .should('have.attr', 'content', 'Colispo est la première plateforme au monde dédiée au covoiturage de colis entre particuliers. Notre service met en relation des personnes souhaitant expédier des colis à moindre coût et des conducteurs prêts à transporter ces envois lors de leurs trajets.');
    // [Given] Sets up the initial state of the system.
});

Then(`I should see the dashboard elements`, () => {
    cy.log('Verifying the presence of dashboard elements...')
    cy.get(dashboardElements.homeSearchBlock).should('be.visible')
    cy.get(dashboardElements.imagesCarrousel).should('be.visible')
    cy.get(dashboardElements.googleMap).should('be.visible')
    cy.get(dashboardElements.howToblock).should('be.visible')
    cy.get(dashboardElements.advantagesBlock).should('be.visible')
    cy.get(dashboardElements.navBar).should('be.visible')

    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I should see the dashboard title`, () => {
    cy.log('Verifying the presence of the dashboard title...')  
    cy.title()
        .and('contain', 'Accueil')

    // [Then] Describes the expected outcome or result of the scenario.
});

