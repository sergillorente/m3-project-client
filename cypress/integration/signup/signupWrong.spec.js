import Chance from 'chance';
const chance = new Chance();

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Wrong sign up due to misstyping in the email', () => {
        const username = chance.name({ nationality: 'en' });
        const email = chance.string({ length: 10 });
        const password = chance.string({ length: 4 })
        const user = {
            username,
            email,
            password
        }
        cy.get('[type="text"]').type(user.username)
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please add an email. Remember the @ sign')
    })

    it('Wrong sign up due to omission of password', () => {
        const username = chance.name({ nationality: 'en' });
        const email = chance.email({ domain: 'mail.com' });

        const user = {
            username,
            email,
            password: ''
        }
        cy.get('[type="text"]')
            .type(user.username)
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