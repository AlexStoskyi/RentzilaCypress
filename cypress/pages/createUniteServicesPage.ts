import { BasePage } from './basePage';

class CreateUniteServicesPage extends BasePage {
    private cervicesSearchField = '[class*=ServicesUnitFlow_searchInput]';
    private cervicesListItem = '[class*=ServicesUnitFlow_flexForServices]';


    clickOnItemOnListCervices(i:number=0){
        this.clickElement(this.getCervicesListItem(i))
    }

    getCervicesListItem(i:number=0){
    return this.getElement(this.cervicesListItem).eq(i)
    }

    fillTextToCervicesSearchField(text: string){
        this.typeText(this.getCervicesSearchField(), text)
    }

    getCervicesSearchField(){
        return this.getElement(this.cervicesSearchField)
    }

}

export const createUniteServicesPage = new CreateUniteServicesPage();