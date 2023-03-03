

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Get redirected to the login page', () => {
    cy.url().should('include', '/login')
  })

  it('Validate form input', () => {
    cy.get('.button').click()
    cy.get('.input__error').should('be.visible')
  })

  it('Validate against non existing users', () => {
    const alert = cy.stub().as("alert")

    cy.on('window:alert', alert)

    cy.get('[formControlName="username"]').type('invalid_username')
    cy.get('[formControlName="password"]').type('wrong password')
    cy.get('.button').click()

    cy.get('@alert').should('have.been.calledOnceWith', 'Invalid username or password!')
  })

  it('Log valid users in', () => {
    cy.login();
  })
})