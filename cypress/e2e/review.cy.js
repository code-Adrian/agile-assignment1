const authUser = require('../fixtures/login.json');
import "../support/commands";

let movies;
const {email,password} = authUser;

describe("Navigating to favourite page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          movies = response.results;
        });
    });


    beforeEach(() => {
      cy.visit("/");
    });

    before(() => {
      cy.login(email,password);
    });

    describe("Selecting favourites", () => {
      it("selected movie card shows the red heart", () => {
        cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get(".MuiCardHeader-root").eq(1).find("svg");
      });
    });
  
    describe("The favourites page", () => {
      beforeEach(() => {
        // Select a favourite movie and navigating to Favourites page
        cy.get("button[aria-label='add to favorites']").eq(0).click();
        cy.get("button").contains("Favorites").click();
      });
      it("only the tagged movies are listed", () => {
        cy.get(".MuiCardHeader-content").should("have.length", 1);
        cy.get(".MuiCardHeader-content")
          .eq(0)
          .find("p")
          .contains(movies[0].title);
      });
    });

    
});

    describe("Writing review", () => {

        it("Navigating to reviews page", () => {
            cy.get("a[href='/reviews/form']").eq(0).click();
            cy.checkUrl("/reviews/form");
        });      
        
        describe("Error checking", () => {

            describe("Missing author name check", () => {

            it("Clearing form", () =>{
            cy.get("button[type='reset']").click();
            });

            it("Review text", () =>{
            cy.get("textarea[name='review']").clear().type(`This is a review text for the movie ${movies[0].title}`);
            });
            
            it("Submit Review" , () =>{
            cy.get("button[type='submit']").click();
            });
            
            it("Check for error in form" , () =>{
            cy.get("form").find("p").contains("Name is required");
            });    
        });

        describe("Missing review text check", () => {

          it("Clearing form", () =>{
          cy.get("button[type='reset']").click();
          });

          it("Author name text", () =>{
          cy.get("input[name='author']").clear().type(email);
          });
          
          it("Submit Review" , () =>{
          cy.get("button[type='submit']").click();
          });
          
          it("Check for error in form" , () =>{
          cy.get("form").find("p").contains("Review cannot be empty.");
          });    
      });
    });
    
      describe("Writing Review & Checking if saved", () => {

        it("Clearing form", () =>{
        cy.get("button[type='reset']").click();
        });

        it("Author name text", () =>{
        cy.get("input[name='author']").clear().type(email);
        });
        
        it("Review text", () =>{
          cy.get("textarea[name='review']").clear().type(`This is a review text for the movie ${movies[0].title}`);
          });

        it("Submit Review" , () =>{
        cy.get("button[type='submit']").click();
        });
        
        it("Check if review is submitted", () =>{
          cy.get(".MuiAlert-message h4").contains("Thank you for submitting a review");
        });

        it("Exit & check if redirected", () =>{
          cy.get("button[title='Close']").click();
          cy.checkUrl("/movies/favorites");
        });

        it("Logout & Check if redirected", () =>{
          cy.logout();
          cy.checkUrl("/login");
        });
    });    
});
