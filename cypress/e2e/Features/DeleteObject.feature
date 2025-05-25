Feature: Delete Object
  Scenario: Delete an object from the API

    Given I have the API endpoint
    When I send a DELETE request to the API endpoint
    Then the response status code should be 200
