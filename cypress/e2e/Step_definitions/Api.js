import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given(`I have the API endpoint {string}`, (arg0) => {
    cy.log('Setting up the API endpoint...')
});

When(`I send a GET request to the API endpoint`, () => {
    cy.log('sending Get request to the API endpoint...')
    cy.request({
        methode: 'GET',
        url: 'https://api.restful-api.dev/objects',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
            expect(response.body).to.be.an('array')

            const colors = response.body.map(item => item.data?.color || item.data?.Color || item.data?.['Strap Colour']) // Handle different key variations
                .filter(Boolean);
            // Log the extracted colors
            cy.log('Extracted Colors:', colors);
            // List the extracted colors in the Cypress log
            colors.forEach((color, index) => {
                cy.log(`Color ${index + 1}: ${color}`);
            });
            // Assert that colors array is not empty
            expect(colors).to.not.be.empty; // Remove undefined values
            //expect(response.body).to.have.property('id', "2")
            //expect(response.body).to.have.property('name', "Apple iPhone 12 Mini, 256GB, Blue")
            //expect(response.body).to.have.property('data').to.be.null

            cy.log('Response body:', response.body)
        })
});

Then(`the response status code should be {int}`, (arg0) => {


    // [Then] Describes the expected outcome or result of the scenario.
});

And(`the response body should not be empty`, () => {
    cy.log('Verifying the response body is not empty...')
    // [Then] Describes the expected outcome or result of the scenario.
});