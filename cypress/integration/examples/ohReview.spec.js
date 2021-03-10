import Chance from 'chance';
const chance = new Chance(); 

// I DO NEED TO OPEN THE SERVER, THE CLIENT AND THE CYPRESS, 3 DIFFERENT WINDOWS AT THE SAME TIME

context('Oh! Review App', () => {
    beforeEach(() => {
        // cy.task('clear:db')
        // cy.task('seed:db', userSeed.data) // THIS SERVES TO CREATE NEW DATA
        cy.visit('http://localhost:3000')
        cy.contains('START NOW').click()
      })

      it('Sign Up page', () => {
        const username = chance.name({ nationality: 'en' });  
        const email = chance.email({ domain: 'mail.com' });
        const password = chance.string({ length: 4 })

        const user = {
            username,
            email,
            password
        }  

        cy.visit('http://localhost:3000/signup')
        cy.get('input[name="username"]').type(user.username)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input#signup-btn').click()

        // Once signed up, go to the login page

        cy.url()
            .should('contain', '/login')

        // expect user from server to match user from test
        cy.getUser(user.email)
            .then(dbUser => expect(dbUser).to.deep.eql(user))
               
      });

      it('Login page', () => {
          const user = {
              email: 'betty@mail.com',
              password: '1234'
          }
      })

    // afterEach(() => {
    //     //delete user
    // })

    // I NEED TO KNOW HOW TO GENERATE RANDOM USERNAMES, EMAILS AND PASSWORDS TO ADD THEM INTO THE SIGNUP AND LOGIN PROCESS
    // AS THE SIGNUP AND LOGIN PROCESS WILL ADD A RANDOM EMAIL AND PASSWORD, HOW CAN I CONTROLL THAT THE SAME RANDOM DATA IS ADDED INTO THE SIGNUP AND THE LOGIN PROCESS?

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