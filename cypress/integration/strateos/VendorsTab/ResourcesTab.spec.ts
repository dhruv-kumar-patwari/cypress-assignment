import TestPage from '../../../pages/strateos/Robot';
import ResourcesTab from '/home/dhrkp/cypress-starter/cypress/fixtures/locators/vendors_resource_tab.json';
import {makeid} from '/home/dhrkp/cypress-starter/cypress/util/util';

context('Resources Tab', () => {
const page = new TestPage();
    describe('Resource tab operations', ()=>{

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Create Resource", () => {
            const name = makeid(10);
            page.clicksOnDomAfterWait('inHome',
            ResourcesTab.menu);
            page.clickOnDomElement(ResourcesTab.vendors_tab);
            page.clickOnDomElement(ResourcesTab.vendors_resource_subtab);

            page.clickOnDomElement(ResourcesTab.add_resource_btn);
            page.typeTextOnElement(ResourcesTab.resource_name_input, name);
            page.clickOnDomElement(ResourcesTab.resource_kind_dropdown);
            page.clickOnDomElement(ResourcesTab.chemical_structure_option);
            page.clickOnDomElement(ResourcesTab.link_compound_btn);
            page.clickOnDomElement(ResourcesTab.select_link_compound);
            page.clickOnDomElement(ResourcesTab.add_link_compound);
            page.seesDomContainText(ResourcesTab.resource_name, name);
        })

        it("Filter Resource", () => {
            const name = makeid(10);
            page.clicksOnDomAfterWait('inHome',
            ResourcesTab.menu);
            page.clickOnDomElement(ResourcesTab.vendors_tab);
            page.clickOnDomElement(ResourcesTab.vendors_resource_subtab);

            page.clickOnDomElement(ResourcesTab.kind_filter_dropdown);
            page.clickOnDomElement(ResourcesTab.kind_filter_protein_option);
            page.seesDomContainText(ResourcesTab.first_child_kind, 'Protein');

            page.clickOnDomElement(ResourcesTab.storage_condition_dropdown);
            page.clickOnDomElement(ResourcesTab.storage_condition_cold4_option);
            page.seesDomContainText(ResourcesTab.third_child_storage_condition, 'cold_4');
        })
    });

});