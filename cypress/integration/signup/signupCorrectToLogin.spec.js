import Chance from 'chance';
const chance = new Chance(); 

context('Sign up Page', () => {
    beforeEach(() => {
        cy.server()
    });

    const inputs = {
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[type="password"]'
    }

    const username = chance.name({ nationality: 'en' });  
    const email = chance.email({ domain: 'mail.com' });
    const password = chance.string({ length: 4 })

    const user = {
        username,
        email,
        password
    }    

    it('Sign Up page with all inputs set correct and proceed to login with those credentials', () => {
        
        cy.visit('http://localhost:3000/signup')

        cy.url()
            .should('contain', '/signup')

        cy.get(inputs.username).type(user.username)
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#signup-btn').click()

    })
        
    it('Load data when signed up', () => {

        cy.url()
        .should('contain', '/hotels')

        cy.get(':nth-child(1) > :nth-child(2) > a > #button-share')
        .should('contain', 'Share your opinion')

    })

    it('Load search bar and test its functionality', () => {

        const searchInputs = {
            hotel: 'Four Points',
            hotelEmpty: ''
        }

        cy.get('#search').type(searchInputs.hotel)
        
        cy.get('#search-btn').click()
        
        cy.get('#title')
            .should('contain', searchInputs.hotel)

        cy.get('#remove').click()

        cy.get('#search').clear()
            .should('have.value', searchInputs.hotelEmpty)

    })

    it('Logout and login', () => {
        
        cy.get('#navbar-logout').click()

        cy.url()
        .should('contain', '/hotels')

        cy.get('[href="/login"] > .navbar-button').click()
        
        cy.url()
            .should('contain', '/login')
        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()

    })

    it('Delete the user', () => {

        cy.get('#icon-profile > div > img').click()


        cy.get('.ui').click()
    })
})