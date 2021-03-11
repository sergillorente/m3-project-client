context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Sign Up page with all inputs set and correct', () => {

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
    })
})