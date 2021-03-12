context('Login Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/login')
    });

    it('Login with everything correct', () => {
        const user = {
            email: "saw@mail.com",
            password: "1234"
        }  

        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
    })
})