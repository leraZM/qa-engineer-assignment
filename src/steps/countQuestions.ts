import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../support/hooks/pageFixture";

Given("User navigates to the application", async function () {
  await pageFixture.questionPage.navigateTo();
});

Then('User sees {string} text', async function (expectedText: string) {
  const actualText = await pageFixture.questionPage.getSidebarText();
  expect(actualText).toContain(expectedText);
});

Then(
  "User sees {string} on the sidebar",
  async function (expectedText: string) {
    const actualText = await pageFixture.questionPage.getSidebarText();
    expect(actualText).toContain(expectedText);
  }
);

When("User removes questions", async function () {
  await pageFixture.questionPage.clickButton("Remove questions");
});
