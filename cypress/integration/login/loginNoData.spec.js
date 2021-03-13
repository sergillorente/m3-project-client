context('Login Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/login')
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]'
    }

    it('Login page with all inputs empty, and then throw an error', () => { 
        cy.get(inputs.email)
            .should('have.value', '')
        cy.get(inputs.password)
            .should('have.value', '')
        cy.get('#login-btn').click()
        
        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please fill all required fields')
    })

})