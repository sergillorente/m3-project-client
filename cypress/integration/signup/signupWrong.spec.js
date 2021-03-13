import Chance from 'chance';
const chance = new Chance();

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]'
    }

    const errorMessages = {
        requiredField: 'Please fill all required fields',
        validEmail: 'Please add an email. Remember the @ sign'
    }

    it('Wrong sign up due to misstyping in the email', () => {
        const username = chance.name({ nationality: 'en' });
        const email = chance.string({ length: 10 });
        const password = chance.string({ length: 4 })
        const user = {
            username,
            email,
            password
        }
        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains(errorMessages.validEmail)
    })

    it('Wrong sign up due to omission of password', () => {
        const username = chance.name({ nationality: 'en' });
        const email = chance.email({ domain: 'mail.com' });

        const user = {
            username,
            email,
            password: ''
        }
        cy.get(inputs.username)
            .type(user.username)
        cy.get(inputs.email)
            .type(user.email)
        cy.get(inputs.password)
            .should('have.value', '')
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains(errorMessages.requiredField)
    })
})