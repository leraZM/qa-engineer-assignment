import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../support/hooks/pageFixture";

Then('"No questions yet" text is shown', async function () {
  expect(await pageFixture.questionPage.noQuestionsText()).toContain(
    "No questions yet"
  );
});

Then(
  'The "Sort questions" and "Remove questions" buttons are shown',
  async function () {
    await pageFixture.questionPage.areButtonsVisible([
      "Sort questions",
      "Remove questions",
    ]);
  }
);

Then(
  'The "Sort questions" and "Remove questions" buttons are hidden',
  async function () {
    await pageFixture.questionPage.areButtonsHidden([
      "Sort questions",
      "Remove questions",
    ]);
  }
);

Then("All questions are removed", async function () {
  const questionsCount = await pageFixture.questionPage.questionsCount();

  expect(questionsCount).toEqual(0);
});
