import Chance from 'chance';
const chance = new Chance();

context('Login Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/login')
    });

    it('Wrong sign up due to misstyping in the email', () => {

        const user = {
            email: 'saww@mail.com',
            password: '1234'
        }
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#login-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains(`The user doesn't exist`)
    })

    it('Wrong sign up due to omission of password', () => {
        const user = {
            email: 'saw@mail.com',
            password: ""
        }
        cy.get('[type="email"]')
            .type(user.email)
        cy.get('[type="password"]')
            .should('have.value', '')
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please add a password')
    })
})