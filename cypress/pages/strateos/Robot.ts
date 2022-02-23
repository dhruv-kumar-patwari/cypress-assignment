import BasePage from '../BasePage';

export default class TestPage extends BasePage {
   
    visitWeb(){
        this.accessUrl(Cypress.env('HOST'));
    }

    login() {
        cy.get('#emailInput').type(Cypress.env('EMAIL'));
        cy.get('#passwordInput').type(Cypress.env('PASSWORD'));
        cy.get('#submitButton').click();
        return this;
    }

    createUrlAlias(url: string, alias: string) {
        cy.intercept(url).as(alias);
        return this;
    }

    seesDomWithTextAfterWait(alias: string, dom: string, text: string): this {
        cy.wait(`@${alias}`);
        this.seesDomContainText(dom, text);
        return this;
    }

    seesTextWithClassAfterWait(alias: string, domClass: string, text: string): this {
        cy.wait(`@${alias}`);
        this.seesTextWithClass(domClass, text);
        return this;
    }

    clicksOnClassAfterWait(alias: string, domClass: string): this {
        cy.wait(`@${alias}`);
        cy.get(`.${domClass}`).click();
        return this;
    }

    clicksOnDomAfterWait(alias: string, dom: string): this {
        cy.wait(`@${alias}`);
        cy.get(dom).click();
        return this;
    }

    typeTextOnElement(className: string, text: string) {
        cy.get(`${className}`).type(text, { force: true });
        return this;
    }

    // hoverOnElementAfterWait(className: string, text: string) {
    //     cy.ho
    //     return this;
    // }
}