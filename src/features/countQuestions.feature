Feature: Count questions tests

Background: 
  Given User navigates to the application

Scenario: Check sidebar text for 1 question
  Then User sees "Here you can find 1 question." text

Scenario: Check sidebar text for 2 questions
  When User creates a question
  And User clicks on the "Create question" button
  Then User sees "Here you can find 2 questions." on the sidebar

Scenario: Check sidebar text for 0 questions 
  When User removes questions
  Then User sees "Here you can find no questions." on the sidebar

