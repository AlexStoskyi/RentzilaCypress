import { BasePage } from './basePage';

class HomePage extends BasePage {
    private loginButton = '[class*=NavbarAuthBlock_buttonEnter]';
    private loginInput = '#email';
    private passwordInput = '#password';
    private submitButton = '[class*=Authorization_container] [class*=ItemButtons_darkBlueRoundBtn]';
    private createNewUnite = '[class*=Navbar_addAnnouncement]'
    
    clickCreateNewUnite(){
        this.clickElement(this.createNewUnite);
    }

    clickLoginButton(){
        this.clickElement(this.loginButton)
    }

    enterUsername(username: string) {
      this.typeText(this.loginInput, username);
    }
    
    enterPassword(password: string) {
      this.typeText(this.passwordInput, password);
    }
  
    submitLogin() {
      this.clickElement(this.submitButton);
    }
  
    login(username: string, password: string) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.submitLogin();
    }
}

export const homePage = new HomePage();