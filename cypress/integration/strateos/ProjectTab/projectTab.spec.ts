import TestPage from '../../../pages/strateos/Robot';
import ProjectPage from '/home/dhrkp/cypress-starter/cypress/fixtures/locators/project_tab.json';
import {makeid} from '/home/dhrkp/cypress-starter/cypress/util/util';

context('Project Tab', () => {
const page = new TestPage();
    describe('Project tab operations', ()=>{
        const projectName = makeid(10);

        beforeEach(() => {
            page.visitWeb();
            page.login();
            page.createUrlAlias(Cypress.env("HOME_PAGE"), 'inHome');
        })

        it("Create Project", () => {
            page.clicksOnClassAfterWait('inHome',
            ProjectPage.projects_tab);

            page.createUrlAlias('https://m.stripe.com/6', 'inProjects');

            page.clicksOnClassAfterWait('inProjects',
            ProjectPage.create_project_icon);

            page.typeTextOnElement(
                ProjectPage.project_name_input,
                projectName);

            page.clickOnDomElement(ProjectPage.create_project);

            page.seesDomContainText(ProjectPage.breadcrumb_project_name, projectName);
            
            page.clickOnDomElement(ProjectPage.breadcrumb_project_tab);
            
            page.seesDomContainText(ProjectPage.project_name_display, projectName);
        })

        it("Favorite Project", () => {
            page.clicksOnClassAfterWait('inHome',
            ProjectPage.projects_tab);

            page.createUrlAlias('https://m.stripe.com/6', 'inProjects');

            page.clicksOnDomAfterWait('inProjects',
            ProjectPage.project_star);

            page.clickOnDomElement(ProjectPage.favorite_filter)

            page.seesDomContainText(ProjectPage.filtered_project_title, projectName);
        })
    });

});