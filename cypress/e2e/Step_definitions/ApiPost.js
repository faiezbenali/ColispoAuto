import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let apiUrl="https://api.restful-api.dev/objects";
let requestBody;
let response;

Given('the API endpoint is {string}', (url) => {
  apiUrl = url;
  cy.log('API endpoint set to:', apiUrl);
});

Given('the request body is:', (docString) => {
  requestBody = JSON.parse(docString);
  cy.log('Request body prepared:', JSON.stringify(requestBody));
});

When('I send a POST request to the API', () => {
  cy.request({
    method: 'POST',
    url: apiUrl,
    body: requestBody,
    failOnStatusCode: false, 
        headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    response = res;
    cy.wrap(response).as('apiResponse');
  });
});

Then('the response status code should be {int} or {int}', (code1, code2) => {
  expect([code1, code2]).to.include(response.status)
});

Then('the response should contain the name {string}', (expectedName) => {
  expect(response.body).to.have.property('name', expectedName);
});