import TestPage from '../../../pages/strateos/Robot';
import MaterialsTab from '/home/dhrkp/cypress-starter/cypress/fixtures/locators/vendors_material_tab.json';

context('Materials Tab', () => {
const page = new TestPage();
    describe('Materials tab operations', ()=>{

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Create Material", () => {
            page.clicksOnDomAfterWait('inHome',
            MaterialsTab.menu);
            page.clickOnDomElement(MaterialsTab.vendors);
            page.clickOnDomElement(MaterialsTab.material);
            page.clickOnDomElement(MaterialsTab.new_button);
            page.clickOnDomElement(MaterialsTab.add_button);
            page.clickOnDomElement(MaterialsTab.compound);
            page.clickOnDomElement(MaterialsTab.continue);
            page.clickOnDomElement(MaterialsTab.resource);
            page.clickOnDomElement(MaterialsTab.select);
            page.clickOnDomElement(MaterialsTab.vendor);
            page.clickOnDomElement(MaterialsTab.vendor_type);
            page.clickOnDomElement(MaterialsTab.add_cost_item_input);
            page.typeTextOnElement(MaterialsTab.amount_input, '100');
            page.clickOnDomElement(MaterialsTab.select_unit);
            page.clickOnDomElement(MaterialsTab.unit_type_suggestion);
            page.typeTextOnElement(MaterialsTab.cost_input, '10');
            page.typeTextOnElement(MaterialsTab.sku_input, '10');

            page.clickOnDomElement(MaterialsTab.check_icon);
            page.clickOnDomElement(MaterialsTab.create_button);
            
        })
    });

});