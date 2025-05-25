Feature: Create and delete an object via API

  Scenario: Create an object and then delete it using its ID
    Given I send a POST request to create a new object
    When I delete the object using the ID from the POST response
    Then I should receive a success message confirming the deletion