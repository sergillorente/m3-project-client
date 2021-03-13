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

    it('Login with everything correct', () => {
        const user = {
            email: "anana@mail.com",
            password: "1234"
        }  

        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
    })
})