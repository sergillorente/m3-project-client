import Chance from 'chance';
const chance = new Chance();

context('Login Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/login')
    });

    const inputs = {
        email: '[name="email"]',
        password: '[type="password"]'
    }

    const email = chance.email({ domain: 'mail.com' });
    const password = chance.string({ length: 4 })

    const user = {
        email,
        password,
        emptyPassword: undefined
    }

    const errorMessages = {
        requiredField: 'Please fill all required fields',
        validEmail: 'Please add an email. Remember the @ sign',
        noUser: `The user doesn't exist`
    }

    it('Wrong login because all inputs are empty', () => { 

        cy.get(inputs.email)
            .should('have.value', '')
        cy.get(inputs.password)
            .should('have.value', '')
        cy.get('#login-btn').click()
        
        cy.get('#error-messages > p')
            .should('be.visible')
            .contains(errorMessages.requiredField)
    })

    it('Wrong sign up due to misstyping in the email', () => {

        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()

        cy.get('#error-messages > p')
            .should('be.visible')
            .contains(errorMessages.noUser)
    })

    it('Wrong sign up due to omission of password', () => {
        
        cy.get(inputs.email)
            .type(user.email)
        cy.get(inputs.password)
            .should('have.value', '')
        cy.get('#login-btn').click()

        cy.get('#error-messages > p')
            .should('be.visible')
            .contains(errorMessages.requiredField)
    })
})