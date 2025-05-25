Feature: Test Api


    To test the API endpoints

Scenario: Send Get Request to the API
    Given I have the API endpoint "https://api.restful-api.dev/objects"
    When I send a GET request to the API endpoint
    Then the response status code should be 200
    And the response body should not be empty