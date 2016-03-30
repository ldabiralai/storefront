Feature: Customers should be able to see a list of products

  Scenario: Viewing the summary
    Given I go to the home page
    Then I should see 'Storefront'


  Scenario: Customer wants to view more information
    Given I go to the home page
    When I click 'Black'
    Then I should see 'A classic black cat who may bring luck to those who buy her.'
