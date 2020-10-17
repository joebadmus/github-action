class LoginPage {
  email() {
    return cy.get('[type="email"]');
  }

  password() {
    return cy.get('[type="password"]');
  }
  signIn() {
    return cy
      .get('[class*="btn-primary"]')
      .contains("Sign in")
      .should("be.visible");
  }
}

export default LoginPage;
