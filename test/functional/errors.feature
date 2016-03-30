Feature: As a customer I want to be notified if something goes wrong

  Scenario: Service returns an error
    Given the products service returns a 503
    When I go to the home page
    Then I should see 'Error, please try later'


  Scenario: Information service returns an error
    Given the product information service returns a 503
    When I go to the home page
    And I click 'Black'
    Then I should see 'Error, please try later'
