Feature: Post Object
    Scenario: Add new object to the API

        Given I navigate to the API endpoint
        When I send a POST request to the API endpoint 
        Then the response status code should be 200n