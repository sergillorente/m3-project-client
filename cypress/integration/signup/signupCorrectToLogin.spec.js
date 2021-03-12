import Chance from 'chance';
const chance = new Chance(); 

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Sign Up page with all inputs set correct and proceed to login with those credentials', () => {
        const username = chance.name({ nationality: 'en' });  
        const email = chance.email({ domain: 'mail.com' });
        const password = chance.string({ length: 4 })

        const user = {
            username,
            email,
            password
        }  

        cy.get('input[name="username"]').type(user.username)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input#signup-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()
        
        cy.visit('http://localhost:3000/login')
        
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
    })
})