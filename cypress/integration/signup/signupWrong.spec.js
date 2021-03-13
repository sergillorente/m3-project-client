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

    const username = chance.name({ nationality: 'en' });
    const email = chance.string({ length: 10 });
    const password = chance.string({ length: 4 })
    
    const user = {
            username,
            email,
            password
        }

    it('Wrong sign up due to all input fields empty', () => { 

        cy.get(inputs.username)
            .should('have.value', '')
        cy.get(inputs.email)
            .should('have.value', '')
        cy.get(inputs.password)
            .should('have.value', '')
        cy.get('#signup-btn').click()
        
        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please fill all required fields')
    })

    it('Wrong sign up due to misstyping in the email', () => {
        
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

    it('Wrong sign up because the user already exists', () => {
        
        const newUser = {
            username: 'Berto',
            email: 'berto@mail.com',
            password: '1234'
        }

        cy.get(inputs.username).type(newUser.username)
        cy.get(inputs.email).type(newUser.email)
        cy.get(inputs.password).type(newUser.password)
        cy.get('#signup-btn').click()

        cy.url()
            .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()
        cy.url()
            .should('contain', '/hotels')

        cy.get('#signup').click()

        cy.url()
            .should('contain', '/signup')

        cy.get(inputs.username).type(newUser.username)
        cy.get(inputs.email).type(newUser.email)
        cy.get(inputs.password).type(newUser.password)
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('User already exists')
    })

    it('Delete the user', () => {

        const user = {
            username: 'Berto',
            email: 'berto@mail.com',
            password: '1234'
        }

        cy.get('[href="/login"] > .navbar-button').click()
                    
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()

        cy.get('#icon-profile > div > img').click()

        cy.get('.ui').click()
    })
})