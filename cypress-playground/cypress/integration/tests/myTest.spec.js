///  <reference types="cypress" />

describe('My first Cypres Test', () => {


    it('Navigate to site', () => {

        cy.visit('http://executeautomation.com/demosite/Login.html')

    })

    it('Login to app', () => {

        cy.get(':nth-child(1) > input').type("admin")
        cy.get(':nth-child(2) > input').type("password")
        cy.get(':nth-child(3) > input').click()
    })
    it("Enter user details", () => {
        //By Id
        cy.get('#TitleId').select('Mr.')
        cy.get('#Initial').type('Y')
        cy.get('#FirstName').type('Yerko')
        cy.get('#MiddleName').type('Milton')
        cy.get(':nth-child(7) > td > input').click()

        //Most recommended way
        

    })
})