import { Page } from '@playwright/test';
import QuestionPage from '../../pages/QuestionsPage';

export const pageFixture = {
  page: undefined as unknown as Page,
  questionPage: undefined as unknown as QuestionPage
};
