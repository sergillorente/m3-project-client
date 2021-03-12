context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Sign Up page with all inputs without data and throw an error', () => { 
        cy.get('[type="text"]')
            .should('have.value', '')
        cy.get('[type="email"]')
            .should('have.value', '')
        cy.get('[type="password"]')
        .should('have.value', '')
        cy.get('#signup-btn').click()

        cy.get('[type="email"]')
            .should('contain', 'Please fill in this field.')
        
        // cy.url()
        // .should('contain', '/hotels')
        
        // cy.get('button#navbar-logout').click()
        
        // cy.visit('http://localhost:3000/login')
        
        // cy.get('input[name="email"]').type(user.email)
        // cy.get('input[name="password"]').type(user.password)
        // cy.get('input#login-btn').click()
        
        // cy.url()
        // .should('contain', '/hotels')
    })
})