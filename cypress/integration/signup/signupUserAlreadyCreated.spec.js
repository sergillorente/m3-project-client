 context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]'
    }

    it('Sign Up page with a user already created. Throw an error', () => {

        cy.visit('http://localhost:3000/signup')
        
        const user = {
            username: 'Berto',
            email: 'berto@mail.com',
            password: '1234'
        }

        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#signup-btn').click()

        cy.url()
            .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()
        cy.url()
            .should('contain', '/hotels')

        cy.get('#signup').click()

        cy.url()
            .should('contain', '/signup')

        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
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


