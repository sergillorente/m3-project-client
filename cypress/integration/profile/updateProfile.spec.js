import Chance from 'chance';
const chance = new Chance(); 

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]',
    }

    it('Update the username and the password', () => {
        const username = chance.name({ nationality: 'en' });  
        const email = chance.email({ domain: 'mail.com' });
        const password = chance.string({ length: 4 })
        const newUsername = chance.name({ nationality: 'en' })
        const newPassword = chance.string({ length: 5 })

        const user = {
            username,
            email,
            password,
            newUsername,
            newPassword
        }
        
        cy.visit('http://localhost:3000/signup')

        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#signup-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
        
        // cy.get('button#navbar-logout').click()

        // cy.url()
        // .should('contain', '/hotels')

        cy.get('[href="/login"] > .navbar-button').click()
        
        cy.url()
            .should('contain', '/login')
        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()

        cy.url()
        .should('contain', '/hotels')

        cy.get('#icon-profile > div > img').click()

        cy.url()
            .should('contain', '/profile')

        cy.get('[required=""]').type(user.newUsername)
        cy.get(inputs.password).type(user.newPassword)
        cy.get('#profile-btn').click()

        cy.get('[type="password"]').type(user.password)
        cy.get('#profile-btn').click()
    })

    it('Delete the user', () => {

        cy.get('.ui').click()
    })
})