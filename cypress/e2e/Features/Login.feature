Feature: Login
  As a user, I want to log in so that I can access my dashboard

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard

  Scenario Outline: Invalid login
    Given I am on the login page
    When I enter email "<email>" in the email field
    And I enter password "<password>" in the password field
    And I click to the submit button
    Then I should see the error message "<message>"


    Examples:
      | email                 | password | message                                   |
      | particulier@gmail.com | 111      | Veuillez saisir un mot de passe valide    |
      | particulier@gmail     | 0000     | Veuillez saisir une adresse e-mail valide |
      | particulier@gmail.com |          | Veuillez saisir un mot de passe           |
      |                       | 0000     | Veuillez saisir l'adresse e-mail          |
      |                       |          | Veuillez saisir l'adresse e-mail          |
      |                       |          | Veuillez saisir un mot de passe           |