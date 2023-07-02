/// <reference types="cypress" />

const cypressVisitPage = () => cy.visit('http://192.168.0.77:5500/index.html');

describe('lnktree testing', () => {
  it('should open the page', () => {
    cypressVisitPage()
  })

  it('should display a logo', () => {
    cypressVisitPage()
    cy.get('[data-cy="logo"]')
  })

  it('should display a button that goes to Linkedin', () => {
    cypressVisitPage()
    cy.get('[data-cy="linkedin"]').click()
  })

  it('should display a button that goes to Github', () => {
    cypressVisitPage()
    cy.get('[data-cy="github"]').click()
  })

  it('should display a button that goes to UFSM article', () => {
    cypressVisitPage()
    cy.get('[data-cy="ufsm"]').click()
  })

  it('should display a button that goes to first Zup Blog article', () => {
    cypressVisitPage()
    cy.get('[data-cy="zup-blog-one"]').click()
  })

  it('should display a button that goes to second Zup Blog article', () => {
    cypressVisitPage()
    cy.get('[data-cy="zup-blog-two"]').click()
  })

  it('should display a button that goes to Zupcast episode #24', () => {
    cypressVisitPage()
    cy.get('[data-cy="zupcast"]').click()
  })

  it('should display a button that goes to Jade article', () => {
    cypressVisitPage()
    cy.get('[data-cy="jade"]').click()
  })

  it('should display a button that goes to Genial Care article', () => {
    cypressVisitPage()
    cy.get('[data-cy="genial-care"]').click()
  })

  it('should display a button that goes to American Psychiatric Assoiation article', () => {
    cypressVisitPage()
    cy.get('[data-cy="psychiatric"]').click()
  })

  it('should display a button that goes to Instituto Singular article', () => {
    cypressVisitPage()
    cy.get('[data-cy="singular"]').click()
  })

  it('should display a button that goes to Canal Autismo article', () => {
    cypressVisitPage()
    cy.get('[data-cy="canal-autismo"]').click()
  })
})