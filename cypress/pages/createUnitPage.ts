import { performanceTimestampProvider } from './../../node_modules/rxjs/src/internal/scheduler/performanceTimestampProvider';
import { BasePage } from './basePage';

class CreateUnitePage extends BasePage {
    private chooseCategoryField = '[class*=CategorySelect_button]';
    private firsListOfCategory = '[class*=FirstCategoryList_content]';
    private secondListOfCategory = '[class*=SecondCategory_namesBlock]';
    private thirdListOfCategory = '[class*= ThirdCategory_wrapper]';
    private announcementTitleField = '[class*=CustomInput_wrapper] input';

    getAnnouncementTitle(){
        return this.getElement(this.announcementTitleField, 1);
    }

    getCategoryField(){
        return this.getElement(this.chooseCategoryField)
    }

    getFirstList(){
       return this.getElement(this.firsListOfCategory)
    }

    getSecondList(){
       return this.getElement(this.secondListOfCategory)
    }

    getThirdList(){
       return this.getElement(this.thirdListOfCategory)
    }

    typeAnnouncementTitle(text: string){
        this.typeText(this.getAnnouncementTitle(), text)
    }

    clickOnCategoryField(){
        this.clickElement(this.getCategoryField())
    }

    clickOnElementOfFirstList(i: number){
        this.clickElement(this.getFirstList().eq(i))
    }

    clickOnElementSecondList(i: number){
        this.clickElement(this.getSecondList().eq(i))
    }

    clickOnElementThirdList(i: number){
        this.clickElement(this.getThirdList().eq(i))
    }

    chooseCategoryFun(i: number = 0, j: number = 0, k: number = 0){
        this.clickOnElementOfFirstList(i);
        this.clickOnElementSecondList(j);
        this.clickOnElementThirdList(k);
    }
}

export const createUnitPage = new CreateUnitePage();