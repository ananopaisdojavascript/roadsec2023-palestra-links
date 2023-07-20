/// <reference types="cypress" />

const cypressVisitPage = () => cy.visit('http://127.0.0.1:5500/index.html');

describe('lnktree testing', () => {

  beforeEach(() => {
    cypressVisitPage()
  })

  it('should display a logo', () => {
    cy.get('[data-cy="logo"]')
  })

  it('should display a button that goes to Linkedin', () => {
    cy.get('[data-cy="linkedin"]').click()
  })

  it('should display a button that goes to Github', () => {
    cy.get('[data-cy="github"]').click()
  })

  it('should display a button that goes to UFSM article', () => {
    cy.get('[data-cy="ufsm"]').click()
  })

  it('should display a button that goes to first Zup Blog article', () => {
    cy.get('[data-cy="zup-blog-one"]').click()
  })

  it('should display a button that goes to second Zup Blog article', () => {
    cy.get('[data-cy="zup-blog-two"]').click()
  })

  it('should display a button that goes to Zupcast episode #24', () => {
    cy.get('[data-cy="zupcast"]').click()
  })

  it('should display a button that goes to Jade article', () => {
    cy.get('[data-cy="jade"]').click()
  })

  it('should display a button that goes to Genial Care article', () => {
    cy.get('[data-cy="genial-care"]').click()
  })

  it('should display a button that goes to American Psychiatric Assoiation article', () => {
    cy.get('[data-cy="psychiatric"]').click()
  })

  it('should display a button that goes to Instituto Singular article', () => {
    cy.get('[data-cy="singular"]').click()
  })

  it('should display a button that goes to Canal Autismo article', () => {
    cy.get('[data-cy="canal-autismo"]').click()
  })
})