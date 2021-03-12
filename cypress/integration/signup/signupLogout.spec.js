import Chance from 'chance';
const chance = new Chance(); 

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Sign Up new user, login, logout, and delete of the user', () => {
        const username = chance.name({ nationality: 'en' });  
        const email = chance.email({ domain: 'mail.com' });
        const password = chance.string({ length: 4 })

        const user = {
            username,
            email,
            password
        }  

        cy.get('[type="username"]').type(user.username)
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#signup-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()

        // RIGHT NOW IS WORKING, BUT ADD ANOTHER IT FOR BETTER DESCRIPTION FOR THE LOGIN PROCESS AFTER THE SIGN UP
        
        cy.visit('http://localhost:3000/login')
        
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')

        // ADD ANOTHER IT FOR BETTER DESCRIPTION FOR THE LOGOUT PROCESS AFTER THE LOGIN

        cy.get('#icon-profile > div > img').click()

        cy.url()
        .should('contain', '/profile')

        cy.get('.ui').click()

        cy.url()
        .should('contain', '/login')
    })
})