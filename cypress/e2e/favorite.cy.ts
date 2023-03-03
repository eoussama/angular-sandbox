describe('Favorites', () => {
  beforeEach(() => {
    cy.login();
  })

  it('Favoring a superhero', () => {
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSuperheros");
    cy.visit('http://localhost:4200/dash/superheroes')
    cy.wait("@getSuperheros");
    cy.wait(500)
    
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getSpider-man");
    cy.get('.input__field').type('spider')
    cy.wait("@getSpider-man");
    cy.wait(500)
    
    cy.intercept({ method: 'PUT', url: '**/localhost:3000/**' }).as("putFavorite");
    cy.get('.superheroes > :first-child .card__favorite .material-symbols-outlined').click()
    cy.wait("@putFavorite");
    cy.wait(500)
    
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getFavorites");
    cy.visit('http://localhost:4200/dash/favorites')
    cy.wait("@getFavorites");
    cy.wait(500)

    cy.contains('Scarlet')
  })

  it('Unfavoring a superhero', () => {
    cy.intercept({ method: 'GET', url: '**/superheroapi.com/api.php/**' }).as("getFavorites");
    cy.visit('http://localhost:4200/dash/favorites')
    cy.wait("@getFavorites");
    cy.wait(500)
    
    cy.intercept({ method: 'PUT', url: '**/localhost:3000/**' }).as("putFavorite");
    cy.get('#superheroe-577 .card__favorite .material-symbols-outlined').click()
    cy.wait("@putFavorite");
    cy.wait(500)

    cy.contains('Scarlet').should('not.exist')
  })
})