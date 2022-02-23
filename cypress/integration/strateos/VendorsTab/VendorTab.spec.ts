import TestPage from '../../../pages/strateos/Robot';
import VendorTab from '/home/dhrkp/cypress-starter/cypress/fixtures/locators/vendors_tab.json';
import {makeid} from '/home/dhrkp/cypress-starter/cypress/util/util';

context('Vendor Tab', () => {
const page = new TestPage();
    describe('Create Vendor', ()=>{

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Create Vendor", () => {

            const name = makeid(10);
            page.clicksOnDomAfterWait('inHome',
            VendorTab.menu);
            page.clickOnDomElement(VendorTab.vendors_tab);
            page.clickOnDomElement(VendorTab.vendors_subtab);
            page.clickOnDomElement(VendorTab.plus_icon);
            page.typeTextOnElement(VendorTab.vendor_name_input, name);
            page.clickOnDomElement(VendorTab.create_vendor);
            page.seesDomContainText(VendorTab.vendors_list_item, name);
        })
    });

});