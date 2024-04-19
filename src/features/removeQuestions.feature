Feature: Remove questions tests

Background: 
  Given User navigates to the application
  Then The "Sort questions" and "Remove questions" buttons are shown

Scenario: User removes questions
  When User removes questions
  Then All questions are removed
  And "No questions yet" text is shown
  And The "Sort questions" and "Remove questions" buttons are hidden