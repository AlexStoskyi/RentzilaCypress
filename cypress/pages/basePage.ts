export class BasePage {
    
    open(url: string) {
      cy.visit(url);
    }
  
    getElement(selector: string, index?: number) {
      const elements = cy.get(selector); 
      if (typeof index !== 'undefined') {
        return elements.eq(index); 
      }
      return elements; 
    }
  
    clickElement(selector: string | Cypress.Chainable) {
      if (typeof selector === 'string') {
        this.getElement(selector).click();
      } else {
        selector.click();
      }
    }
  
    typeText(selector: string, text: string) {
      this.getElement(selector).type(text);
    }
  }
  