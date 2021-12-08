/// <reference types="cypress" />
import loginPayload from '../fixtures/login-request.json'
var Chance = require('chance');
var chance = new Chance();
describe('Inserir comentario', () => {
    beforeEach(() => {
    cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        body: loginPayload
      }).then(response => {
        cy.log(response.body.user.token)
  
        const token = response.body.user.token
  
        window.localStorage.setItem('jwtToken', token)
  
      })
      cy.visit('https://demo.realworld.io/#/article/Create-a-new-implementation-202')
    });
      
    it('Inserir comentario', () => {

        cy.get('textarea[ng-model]').type(chance.paragraph())
        cy.contains('button', 'Post Comment').click()
        
    });
    
});