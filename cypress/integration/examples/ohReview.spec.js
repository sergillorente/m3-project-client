context('Oh! Review App', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('START NOW').click()
      })

    afterEach(() => {
        //delete user
    })

    it('Successfully signs up', () => {
        cy.url().should('include', 'hotels')
        
        cy.get('Hotel').should('exist')

        // expect(true).to.equal(false)
    })

    it('Successfully logs in', () => {
        cy.url().should('include', 'hotels')
        
        cy.get('Hotel').should('exist')

        // expect(true).to.equal(false)
    })

    it('Successfully loads and filters hotels page data', () => {
        cy.url().should('include', 'hotels')
        
        cy.get('Hotel').should('exist')

        // expect(true).to.equal(false)
    })

    it('Successfully leave and delete a review', () => {
        cy.url().should('include', 'hotels')
        
        cy.get('Hotel').should('exist')

        // expect(true).to.equal(false)
    })

    it('Successfully updates profile data', () => {
        cy.url().should('include', 'hotels')
        
        cy.get('Hotel').should('exist')

        // expect(true).to.equal(false)
    })
})