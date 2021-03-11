import Chance from 'chance';
const chance = new Chance(); 

// I DO NEED TO OPEN THE SERVER, THE CLIENT AND THE CYPRESS, 3 DIFFERENT WINDOWS AT THE SAME TIME

context('Home Page functionality', () => {
    beforeEach(() => {
        // cy.task('clear:db')
        // cy.task('seed:db', userSeed.data) // THIS SERVES TO CREATE NEW DATA
        cy.visit('http://localhost:3000')
        cy.contains('START NOW').click()
      })

      

    // afterEach(() => {
    //     //delete user
    // })


    // it('Successfully signs up without username', () => {
        // cy.url().should('include', 'hotels')
        
        // cy.get('Hotel').should('exist')

        // cy.get('input[name="email"]').type('apa@mail.com')
        // cy.get('input[name="password"]').type('1234')
        // cy.get('input#signup-button').click() // using the id selector to target the button element of the DOM

        // cy.location('pathname').should('eq', '/login') // When the signup it's successfull, go to the login page 

        // expect(true).to.equal(false)
    // })

    // it('Successfully signs up with username', () => {
    //     // cy.url().should('include', 'hotels')
        
    //     // cy.get('Hotel').should('exist')

    //     cy.get('input[name="username"]').type('Apa')
    //     cy.get('input[name="email"]').type('apa@mail.com')
    //     cy.get('input[name="password"]').type('1234')
    //     cy.get('input#signup-button').click()

    //     cy.location('pathname').should('eq', '/login') // When the signup it's successfull, go to the login page

    //     // expect(true).to.equal(false)
    // })


    // it('Successfully logs in', () => {
    //     // cy.url().should('include', 'hotels')
        
    //     // cy.get('Hotel').should('exist')

    //     cy.login('apa@mail.com', '1234')

    //     cy.location('pathname').should('eq', '/hotels') // Once the user logs in, it is redirected to the hotels page with further features

    //     // expect(true).to.equal(false)
    // })

    // it('Successfully loads and filters hotels page data', () => {
    //     // cy.url().should('include', 'hotels')
        
    //     // cy.get('Hotel').should('exist')

    //     cy.server() // ACTION WHICH TAKES THE DATA FROM THE SERVER

    //     cy.route('GET', '/hotels*', 'fixture:hotels') // EXAMPLE OF HOW TO GET THE DATA FROM THE "SERVER". YOU CAN ADD DATA IN cypress/fixtures/example.json or by creating a new file in fixtures
    //         .as('hotels') // .as COMMAND IS BASICALLY LABELING THIS ROUTE. SO WHENEVER WANTED TO, WE CAN CALL THIS ROUTE AS 'hotels'


    //         // NOTE NECESSARY BUT, WE CAN ADD A WAITING FOR THE DB TO APPEAR IN THE BODY OF THE APP. THE IMPORTANT MENTION HERE IS THE @ SIGN
    //         cy.window().then(win => {
    //             cy.wait('@hotels')
    //                 .its('response.body.hotels')
    //                 .should('have.length', win.app.$store.state.hotels.length)
    //         })

    //     // expect(true).to.equal(false)
    // })

    // it('Successfully leave and delete a review', () => {
    //     cy.url().should('include', 'hotels')
        
    //     cy.get('Hotel').should('exist')

    //     // expect(true).to.equal(false)
    // })

    // it('Successfully updates profile data', () => {
    //     cy.url().should('include', 'hotels')
        
    //     cy.get('Hotel').should('exist')

    //     // expect(true).to.equal(false)
    // })
})