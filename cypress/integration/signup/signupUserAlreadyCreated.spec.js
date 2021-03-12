context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
        cy.visit('http://localhost:3000/signup')
    });

    it('Sign Up page with a user already created. Through an error', () => {
        
        const user = {
            username: 'Sergi',
            email: 'sergi@mail.com',
            password: '1234'
        }  
        cy.get('[type="text"]').type(user.username)
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#signup-btn').click()

        cy.url()
            .should('contain', '/hotels')
        
        cy.get('button#navbar-logout').click()
        cy.url()
            .should('contain', '/hotels')

        cy.get('#signup').click()

        cy.visit('http://localhost:3000/signup')

        cy.get('[type="text"]').type(user.username)
        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#signup-btn').click()

        cy.get(':nth-child(4) > p')
            .should('be.visible')
            .contains('User already exists')
    })
})