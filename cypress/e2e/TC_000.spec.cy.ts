import { homePage } from '../pages/mainPage';
import { createUnitPage } from '../pages/createUnitPage';
import { createUnitPhotoPage } from '../pages/createUnitePhotoPage';
import { createUniteServicesPage } from '../pages/createUniteServicesPage';
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
    createUnitPage.typeAnnouncementTitle(faker.company.name());
    createUnitPage.fillVehicleManufacturer('ABC');
    createUnitPage.ChooseVehicleManufacturerItem(0);
    createUnitPage.clickOnMapField();
    createUnitPage.clickOnConfirmAddressButton();
    createUnitPage.clickOnNextButton();
    createUnitPhotoPage.uploadImage();
    createUnitPage.clickOnNextButton();
    createUniteServicesPage.fillTextToCervicesSearchField('Service name')
    createUniteServicesPage.clickOnItemOnListCervices(0);
    createUnitPage.clickOnNextButton();
})
})