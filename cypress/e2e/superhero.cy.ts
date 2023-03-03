describe('Superhero', () => {
  beforeEach(() => {
    cy.login();
    cy.get('.items :nth-child(3)').click()
  })

  it('Navigate to the superheroes page', () => {
    cy.url().should('include', 'dash/superheroes')
  })

  it('Lazy loading superheroes', () => {
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSuperheros1");
    cy.wait("@getSuperheros1");
    cy.wait(500)
    cy.get('.superheroes > .superheroe').should('have.length', 20)

    cy.scrollTo(0, 400)
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSuperheros2");
    cy.wait("@getSuperheros2");
    cy.wait(500)
    cy.get('.superheroes > .superheroe').should('have.length', 40)
  })

  it('Superhero search', () => {
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSuperheros");
    cy.wait("@getSuperheros");
    cy.wait(500)

    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSearch");
    cy.get('.input__field').type('batman')
    cy.wait(500)

    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getDetail");
    cy.get('.superheroes > :nth-child(2)').click()
    cy.wait("@getDetail");
    cy.wait(500)

    cy.get('.title').should('contain.text', '#70')
  })
})