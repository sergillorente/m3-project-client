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
        
        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('Please fill all required fields in the signup')
        
    })
})