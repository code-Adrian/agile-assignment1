const authUser = require('../fixtures/login.json');
import "../support/commands";

describe("Registering into the app", () => {

    const {regEmail,regPassword} = authUser;

    describe("The Signup page", () => {
        it("navigation to /signup via side header links", () => {
            cy.visit("/");
            cy.checkUrl("/login");
            cy.get("button").contains("Signup").click();
            cy.get("h1").contains("Register");
        });
        describe("Register", () => {
            it("email input", () => {
                cy.get("input[name='email']").clear().type(regEmail);
            });
            it("password input", () => {
                cy.get("input[name='password']").clear().type(regPassword);
            });
            it("Signup button click", () => {
                cy.get("button[type='submit']").click();
            });
            it("Check discover page and signout", () => {
                cy.checkPageHeader("Discover Movies")
                cy.get(".MuiCardHeader-content").should("have.length", 20);
                cy.get("button").contains("Sign Out!").click();
            });
        });
        
        describe("Error checking", () => {
             beforeEach(() => {
                 cy.get("input[name='email']").clear();
                 cy.get("input[name='password']").clear();
               });

            it("Already exists check", () => {
                cy.visit("/");
                cy.checkUrl("/login");
                cy.get("button").contains("Signup").click();
                cy.get("h1").contains("Register")
                cy.get("input[name='email']").type(regEmail);
                cy.get("input[name='password']").type(regPassword);
                cy.get("button[type='submit']").click();
                cy.get("h1").contains("auth/email-already-in-use");
            });

            it("Missing Email check", () => {
                cy.checkUrl("/signup");
                cy.get("input[name='password']").type(regPassword);
                cy.get("button[type='submit']").click();
                cy.get("h1").contains("auth/missing-email");
            });

            it("Missing Password check", () => {
                cy.checkUrl("/signup");
                cy.get("input[name='email']").type(regEmail);
                cy.get("button[type='submit']").click();
                cy.get("h1").contains("auth/internal-error");
            });
        });

        describe("Signing in and deleting the user", () => {
            it("navigation to /login via side header links", () => {
                cy.visit("/");
                cy.checkUrl("/login");
                cy.get("input[name='email']").clear().type(regEmail);
                cy.get("input[name='password']").clear().type(regPassword);
                cy.get("button[type='submit']").click();
            });
            it("Delete the user", () => {
                cy.checkPageHeader("Discover Movies")
                cy.get(".MuiCardHeader-content").should("have.length", 20);
                cy.get("button").contains("Delete Account!").click();
            });
            it("Check if user is redirected to login page.", () => {
                cy.checkUrl("/login");
                cy.get("input[name='email']");
                cy.get("input[name='password']");
            });
        });
     });
});