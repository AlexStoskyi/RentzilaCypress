import { BasePage } from './basePage';

class CreateUnitePhotoPage extends BasePage {
    private addPhotoFields = '[class*=ImagesUnitFlow_imageItem]';

    getAddPhotoField(i: number){
        return this.getElement(this.addPhotoFields).eq(i)
    }

    uploadImage(){
        cy.fixture('1.jpeg', 'base64').then((fileContent) => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
            const file = new File([blob], 'test-image.jpg', { type: 'image/jpeg' });
      
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
                 
            this.getAddPhotoField(0)
              .trigger('drop', { dataTransfer });
          });
    }

}

export const createUnitPhotoPage = new CreateUnitePhotoPage();