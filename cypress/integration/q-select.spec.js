/// <reference types="Cypress" />

context('q-select', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.get() - html select', () => {
    cy.get('#html-select').select('Valeur 1').should('have.value', 'valeur1')
  })

  it('cy.get() - first q-select', () => {
    cy.get('.q-select-single-radios').select('Google').should('have.value', 'goog')
    cy.get('.my-single-select-value').should('have.text', 'goog')
  })

  it('cy.get() - first q-select - workaround solution', () => {
    cy.get('.q-select-single-radios').click()
    cy.contains('Google').click()
    cy.get('.my-single-select-value').should('have.text', 'goog')
  })
})
