/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      cy.visit("login")
    });
  
    it('Autenticar com credenciais válidas', () => {
      
  
      cy.get("input[type=email]").type(Cypress.env('user')) 
      cy.get("input[type=password]").type(Cypress.env('pass')) 
      cy.contains('button', 'Sign in').click()
  
      cy.get('[href*=editor]').should('be.visible')
    });
  
    it('Autenticar com senha incorreta', () => {
      
    });
  
   
  });
  
 