import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../support/hooks/pageFixture";
import { questions } from "../support/data/questions";

When("User creates multiple questions", async function () {
  for (const { question, answer } of questions) {
    await pageFixture.questionPage.createQuestion(question, answer);
  }
});

When("User clicks on the Create question button", async function () {
  await pageFixture.questionPage.clickButton("Create question");
});

When("User clicks on the Sort questions button", async function () {
  await pageFixture.questionPage.clickButton("Sort questions");
});

Then("The questions can be successfully sorted out", async function () {
  const expected = [
    "Anything else?",
    "Bosnia and Herzegovina was part of what former European country?",
    "How to add a question?",
    "What colour is the sky?",
  ];

  expect(await pageFixture.questionPage.getAllQuestionsText()).toEqual(
    expected
  );
});
