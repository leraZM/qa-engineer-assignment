import { Page, expect } from "@playwright/test";

class QuestionPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("http://localhost:8000/");
  }


  async questionsCount() {
    return (await this.page.$$(".question__question")).length;
  }

  async addQuestion(question: string, answer: string) {
    await this.page.getByLabel("question").fill(question);
    await this.page.getByLabel("answer").fill(answer);
  }

  getSidebarText() {
    return this.page.locator(".sidebar").textContent();
  }

  fillQuestionField(question: string) {
    return this.page.getByLabel("question").fill(question);
  }

  fillAnswerField(answer: string) {
    return this.page.getByLabel("answer").fill(answer);
  }

  toggleQuestionVisibility(question: string) {
    return this.page.getByText(question).click();
  }

  isAnswerVisible(answer: string) {
    return this.page.isVisible(`text="${answer}"`);
  }

  isAnswerHidden(answer: string) {
    return this.page.isHidden(`text="${answer}"`);
  }

  noQuestionsText() {
    return this.page.locator(".questions").textContent();
  }

  async areButtonsVisible(buttonTexts: string[]) {
    for (const text of buttonTexts) {
      await expect(this.page.getByText(text)).toBeVisible();
      await expect(this.page.getByText(text)).toBeEnabled();
    }
  }

  async areButtonsHidden(buttonTexts: string[]) {
    for (const text of buttonTexts) {
      await expect(this.page.getByText(text)).toBeHidden();
    }
  }

  async createQuestion(question: string, answer: string) {
    await this.page.getByLabel("question").fill(question);
    await this.page.getByLabel("answer").fill(answer);
    await this.clickButton('Create question');
  }

  async getAllQuestionsText() {
    const elements = await this.page.$$(".question__question");

    return Promise.all(
      elements.map(async (element) => {
        const text = await element.textContent();
        return text?.trim() ?? "";
      })
    );
  }

  async clickButton(buttonText: string) {
    await this.page.getByText(buttonText).click();
  }
}

export default QuestionPage;
