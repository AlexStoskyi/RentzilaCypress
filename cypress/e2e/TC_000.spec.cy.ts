import { homePage } from '../pages/mainPage';
import { createUnitPage } from '../pages/createUnitPage';
import { faker } from '@faker-js/faker';

context('Actions', () => {
  beforeEach(() => {
    homePage.open('/')
  })

  it('tc_000', () => {
    homePage.clickCreateNewUnite();
  
    homePage.login(Cypress.env(`userLogin`), Cypress.env(`userPassword`));

    createUnitPage.clickOnCategoryField();
    createUnitPage.chooseCategory({firstListIndex: 1, secondListIndex: 1, thirdListIndex: 1})
    createUnitPage.typeAnnouncementTitle(faker.internet.userName());
})
})