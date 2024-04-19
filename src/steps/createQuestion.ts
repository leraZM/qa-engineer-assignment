import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../support/hooks/pageFixture";
import { questions } from "../support/data/questions";

When("User creates a question", async function () {
  const { question, answer } = questions[0];
  await pageFixture.questionPage.addQuestion(question, answer);
});

When("User fills only a question field", async function () {
  const question = questions[0].question;
  await pageFixture.questionPage.fillQuestionField(question);
});

When("User fills only an answer field", async function () {
  const answer = questions[0].answer;
  await pageFixture.questionPage.fillAnswerField(answer);
});

When('User clicks on the "Create question" button', async function () {
  await pageFixture.questionPage.clickButton("Create question");
});

Then("The question is successfully added to the list", async function () {
  const actualCount = await pageFixture.questionPage.questionsCount();
  const expected = 2;

  expect(actualCount).toBe(expected);
});

Then("The question is not created", async function () {
  const actualCount = await pageFixture.questionPage.questionsCount();
  const expected = 1;

  expect(actualCount).toBe(expected);
});

When("User clicks on a question the first time", async function () {
  await pageFixture.questionPage.toggleQuestionVisibility(
    "How to add a question?"
  );
});

Then("The answer is shown", async function () {
  const isVisible = await pageFixture.questionPage.isAnswerVisible(
    "Just use the form below!"
  );

  expect(isVisible).toBe(true);
});

When("User clicks on the question the second time", async function () {
  await pageFixture.questionPage.toggleQuestionVisibility(
    "How to add a question?"
  );
});

Then("The answer is hidden", async function () {
  const isHidden = await pageFixture.questionPage.isAnswerHidden(
    "Just use the form below!"
  );
  expect(isHidden).toBe(true);
});
