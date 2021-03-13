context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]'
    }

    it('Sign Up new user, login, and logout', () => {

        const user = {
            username: 'mama',
            email: 'mama@mail.com',
            password: '1234'
        }  
        cy.visit('http://localhost:3000/signup')

        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#signup-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()

        cy.url()
        .should('contain', '/hotels')
    })
    
    it('Delete the user', () => {

        const user = {
            username: 'mama',
            email: 'mama@mail.com',
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