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

    it('Sign Up page with all inputs empty, and then throw an error', () => { 
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

})