import TestPage from '../../../pages/strateos/Robot';
import CompoundsTab from '/home/dhrkp/cypress-starter/cypress/fixtures/locators/compounds_tab.json';
import {makeid} from '/home/dhrkp/cypress-starter/cypress/util/util';

context('Compounds Tab', () => {
const page = new TestPage();
    describe('Compounds tab operations', ()=>{

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Create Compounds", () => {
            const nickName = makeid(10);
            page.clicksOnDomAfterWait('inHome', CompoundsTab.compounds_tab);
            page.clickOnDomElement(CompoundsTab.register_compound_btn);
            page.clickOnDomElement(CompoundsTab.draw_structure_btn);
            page.clickOnDomElement(CompoundsTab.public_compound_toggle);
            
            page.typeTextOnElement(CompoundsTab.smile_string_input, 'CCCCCCC');
            page.clickOnDomElement(CompoundsTab.next_btn);
            page.typeTextOnElement(CompoundsTab.compound_nickname_input, nickName);
            page.clickOnDomElement(CompoundsTab.create_compound_button);
            page.clickOnDomElement(CompoundsTab.compounds_tab);
            page.seesDomContainText(CompoundsTab.compound_nickname_view, nickName);
        })
    });

});