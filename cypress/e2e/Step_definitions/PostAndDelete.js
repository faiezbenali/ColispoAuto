
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let createdPostId= null;

Given('I send a POST request to create a new object', () => {
  cy.request({
    method: 'POST',
    url: 'https://api.restful-api.dev/objects',
    body: {
      name: "Auto Test",
      data: {
        year: 2025,
        price: 2025.25,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id');
    createdPostId = response.body.id;
    cy.log('Created ID: ' + createdPostId);
  });
});

When('I delete the object using the ID from the POST response', () => {
  expect(createdPostId).to.not.be.null;

  cy.request({
    method: 'DELETE',
    url: `https://api.restful-api.dev/objects/${createdPostId}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.include(`Object with id = ${createdPostId}`);
  });
});

Then('I should receive a success message confirming the deletion', () => {
  // Assertion already performed in the previous step
  cy.log('Delete request completed successfully.');
});