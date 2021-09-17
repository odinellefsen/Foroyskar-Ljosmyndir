/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1920, 1080)
})

describe('Tests in Føroyskar Ljósmyndir', () => {
    it('The url that I want works', () => {

        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('The title is hella correct', () => {
        
        cy.get('[test-cy=stubbi]').should('exist')
    })
    it('burger menu is there', () => {

        cy.get('[test-cy=burger]').should('exist')
    })    
    it('myndirnar eru til', () => {

        cy.get('[test-cy=mynd]').should('be.visible')
    })
    it('the newsletter input thing', () => {

        cy.get('[test-cy=newsletter]').should('exist');
    })
})