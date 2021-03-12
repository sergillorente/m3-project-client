context('Login Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/login')
    });

    it('Login page with all inputs empty, and then throw an error', () => { 
        cy.get('[type="email"]')
            .should('have.value', '')
        cy.get('[type="password"]')
            .should('have.value', '')
        cy.get('#login-btn').click()
        
        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please fill all required fields')
    })

})