Feature: Sort questions out tests

  Background:
    Given User navigates to the application

  Scenario: User sorts questions out
    When User creates multiple questions
    And User clicks on the Sort questions button
    Then The questions can be successfully sorted out

  
