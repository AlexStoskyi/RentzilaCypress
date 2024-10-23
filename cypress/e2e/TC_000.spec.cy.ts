import { homePage } from '../pages/mainPage';
import { createUnitPage } from '../pages/createUnitPage';
import { faker } from '@faker-js/faker';

context('Actions', () => {
  beforeEach(() => {
    homePage.open('/')
  })

  it('tc_000', () => {
    homePage.clickCreateNewUnite();
  
    homePage.login('alexstoskyi@gmail.com', 'Sanya1996a');

    createUnitPage.clickOnCategoryField();
    createUnitPage.chooseCategoryFun(1, 1, 1)
    const text = faker.internet.userName()
    createUnitPage.typeAnnouncementTitle(text);
})
})