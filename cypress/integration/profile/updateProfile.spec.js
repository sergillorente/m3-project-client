import Chance from 'chance';
const chance = new Chance(); 

context('Profile Page', () => {

    it('Update the username and the password', () => {
        cy.server()
        cy.visit('http://localhost:3000/login')

        const newUsername = chance.name({ nationality: 'en' })
        const newPassword = chance.string({ length: 5 })
        const user = {
            newUsername,
            email: "saw@mail.com",
            password: "1234",
            newPassword
        }  

        cy.get('[type="email"]').type(user.email)
        cy.get('[type="password"]').type(user.password)
        cy.get('#login-btn').click()
        
        cy.url()
        .should('contain', '/hotels')

        cy.get('#icon-profile > div > img').click()

        cy.url()
            .should('contain', '/profile')

        cy.get('[required=""]').type(user.newUsername)
        cy.get('[type="password"]').type(user.newPassword)
        cy.get('#profile-btn').click()

        cy.get('[type="password"]').type(user.password)
        cy.get('#login-btn').click()
    })

    it('Get the initial password of the user, so I can have reuse this user more times', () => {
        cy.server()
        cy.visit('http://localhost:3000/profile')

        const user = {
            password: "1234"
        }  

        cy.get('[type="password"]').type(user.password)
        cy.get('#profile-btn').click()

        cy.get('[type="password"]')
            .should('eq', '1234')
    })
})