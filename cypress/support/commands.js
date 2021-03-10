// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:3000/login');
    cy.contains('Sign up').click();
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('#login-btn').click();
    // cy.contains('Welcome back'); ADD A DEFAULT MESSAGE WHEN LOGGED IN, IF THERE IS ONE

})

Cypress.Commands.add('login', (user) => {
    cy.request('POST', `${apiUrl}/login`, user)
})

Cypress.Commands.add("sign up", (user) => {
    cy.request('POST', `${apiUrl}/signup`, user)
})

Cypress.Commands.add('getUser', (username) => {
    return cy.request('GET', `${apiUrl}/users/${username}`)
})
