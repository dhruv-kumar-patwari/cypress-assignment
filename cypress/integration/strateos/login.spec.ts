import TestPage from '../../pages/strateos/Robot';

context('Login Test', () => {
const page = new TestPage();

    describe('Search the required information', ()=>{

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Login successfully", () => {
            page.seesDomWithTextAfterWait('inHome', "a", "Runs");
        });

    });

});