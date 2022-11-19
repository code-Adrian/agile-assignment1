const authUser = require('../fixtures/login.json');
import "../support/commands";

describe("Testing Logging in", () => {
    const {email,password} = authUser;

    describe("Logging in", () => {
    it("check if the url is /login", () => {
        cy.visit("/");
        cy.checkUrl("/login");
    });
    it("Credentials input", () => {
        cy.get("input[name='email']").clear().type(email);
        cy.get("input[name='password']").clear().type(password);
        cy.get("button[type='submit']").click();
     });
    it("Check if logged in & sign out", () => {
        cy.checkPageHeader("Discover Movies");
        cy.get(".MuiCardHeader-content").should("have.length", 20);
        cy.get("button").contains("Sign Out!").click();
    });
    it("Check if redirected back to /login route.", () => {
        cy.checkUrl("/login");
    });
    });

    describe("Error checking", () => {
        beforeEach(() => {
            cy.get("input[name='email']").clear();
            cy.get("input[name='password']").clear();
          });

       it("Already exists check", () => {
           cy.visit("/");
           cy.checkUrl("/login")
           cy.get("button").contains("Signup").click();
           cy.get("h1").contains("Register")
           cy.get("input[name='email']").type(email);
           cy.get("input[name='password']").type(password);
           cy.get("button[type='submit']").click();
           cy.get("h1").contains("auth/email-already-in-use");
       });

       it("Missing Email check", () => {
           cy.checkUrl("/signup");
           cy.get("input[name='password']").type(password);
           cy.get("button[type='submit']").click();
           cy.get("h1").contains("auth/missing-email");
       });

       it("Invalid Email check", () => {
        cy.checkUrl("/signup");
        cy.get("input[name='email']").type(email+email);
        cy.get("input[name='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.get("h1").contains("auth/invalid-email");
    });

       it("Missing Password check", () => {
           cy.checkUrl("/signup");
           cy.get("input[name='email']").type(email);
           cy.get("button[type='submit']").click();
           cy.get("h1").contains("auth/internal-error");
       });
       it("Github fork demonstration - team leader", () => {
            cy.log("Some functionality from team leader");
       });
   });
});