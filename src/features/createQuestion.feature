Feature: Create question tests

  Background:
    Given User navigates to the application

  Scenario: User creates a valid question
    When User creates a question
    And User clicks on the "Create question" button
    Then The question is successfully added to the list

  Scenario: User cannot create a question with an empty question filed
    When User fills only a question field
    And User clicks on the "Create question" button
    Then The question is not created

  Scenario: User can not create a question without an answer
    When User fills only an answer field
    And User clicks on the "Create question" button
    Then The question is not created

  Scenario: User toggles the visibility of an answer
    When User clicks on a question the first time
    Then The answer is shown
    When User clicks on the question the second time
    Then The answer is hidden
