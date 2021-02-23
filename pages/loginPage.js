import { Selector, t} from 'testcafe';
class LoginPage {
    //const email = Selector('#identifierId');
    get userName() { return Selector('input#txtUsername'); }
    get password() { return Selector('input#txtPassword') }
    get nextButton() { return Selector('input#btnLogin') }

    get actualResult() { return Selector('a#welcome').innerText }
    

    async login(user, password) {
        await t
        .typeText(this.userName, "Admin")
        .typeText(this.password, "admin123")
        //.pressKey("enter")
        .click(this.nextButton)
        .expect(this.actualResult).contains('Welcome')
    }
}
export default new LoginPage();
