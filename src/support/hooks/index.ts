import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium } from '@playwright/test';
import { pageFixture } from './pageFixture';
import QuestionPage from '../../pages/QuestionsPage';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async () => {
  await browser.close();
});

Before(async () => {
  context = await browser.newContext();

  const page = await context.newPage();
  pageFixture.page = page;
  pageFixture.questionPage = new QuestionPage(page);
});

After(async ({ pickle, result }) => {
  if (result?.status == Status.FAILED) {
    await pageFixture.page.screenshot({
      path: `./src/report/screenshots/${pickle.name}.png`,
      type: 'png',
    });
  }

  await pageFixture.page.close();
  await context.close();
});
