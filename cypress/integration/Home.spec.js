

context('Home Page and load of Data', () => {

      it('Home Page functionality', () => {

        cy.visit('http://localhost:3000')
        cy.get('.ui')
            .should('contain', 'START NOW').click()

        cy.url()
        .should('contain', '/hotels')

      })

      it('Load data without signing in', () => {

        cy.get('.container > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)')
          .should('contain', 'Share your opinion')
      })

})