///  <reference types="cypress" />
//const _ = Cypress._

//const url = require('url')


describe('CRAFT demo test', () => {


    //it('Navigate to site', () => {

        //cy.visit('login', {failOnStatusCode: false})

    //})
    beforeEach(function () {
        cy.visit('login', {failOnStatusCode: false})
      })



    it('Login to app', () => {

        cy.get('title').contains('CRAFT')
      
        cy.get('.button').click()

        //cy.get(':nth-child(1) > input').type("admin")
        //cy.get(':nth-child(2) > input').type("password")
        //cy.get(':nth-child(3) > input').click()
    })
})