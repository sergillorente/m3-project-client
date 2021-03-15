import Chance from 'chance';
const chance = new Chance(); 

context('Sign up, Login, Hotels, and HotelDetail Page', () => {
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

        cy.visit('http://localhost:3000/login')
        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')
        
        cy.get(':nth-child(1) > :nth-child(2) > a > #button-share')
        .should('contain', 'Share your opinion')
        
    })
    
    it('Pick a hotel and leave a review and delete it', () => {
        cy.visit('http://localhost:3000/login')
        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()
        
        const comment = {
            good: `Hey, I did like soooo much this hotel`
        }

        cy.get(':nth-child(1) > :nth-child(2) > a > #button-share').click()

        cy.url()
            .should('contain', '/hotel-details')
        
        cy.get('#rating-num')
            .select('3')    

        cy.get('#text').type(comment.good)

        cy.get('#submit-btn').click()

        cy.get('.container > :nth-child(1) > :nth-child(5)')
            .should('be.visible')

        cy.get('#delete-btn').click()
    })


    it('Load search bar and test its functionality', () => {

        const searchInputs = {
            hotel: 'Four Points',
            hotelEmpty: '',
            filteredDistrict: 'Ciutat Vella',
            filteredCategory: '5-stars',
            hotelFairmont: 'Hotel Fairmont',
            hotelClaris: 'Claris Hotel'
        }

        cy.visit('http://localhost:3000/login')
        
        cy.get(inputs.email).type(user.email)
        cy.get(inputs.password).type(user.password)
        cy.get('#login-btn').click()

        cy.get('#search').type(searchInputs.hotel)
        
        cy.get('#search-btn').click()
        
        cy.get('#title')
            .should('contain', searchInputs.hotel)

        cy.get('#remove').click()

        cy.get('#search').clear()
            .should('have.value', searchInputs.hotelEmpty)

        cy.get('#filter-district')
            .select(searchInputs.filteredDistrict)

        cy.get('#search').click()

        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #district')
            .should('contain', searchInputs.filteredDistrict)
    
        cy.get('#filter-district')
        .select('Show All')
        
        cy.get('#remove').click()

        cy.get('#filter-category')
            .select(searchInputs.filteredCategory)

        cy.get('#search').click()

        cy.get(':nth-child(3) > :nth-child(1) > #title')
            .should('contain', searchInputs.hotelFairmont, searchInputs.hotelClaris)
        
        cy.get('#filter-district')
            .select('Show All') 
            
        cy.get('#remove').click()

    })

    it('Logout and login', () => {
        
        cy.get('#navbar-logout').click()

        cy.visit('http://localhost:3000/hotels') // I'm refreshing the website because cypress doesn't recognize properly the cokies of the user 

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