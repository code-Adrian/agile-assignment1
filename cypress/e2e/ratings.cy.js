const authUser = require('../fixtures/login.json');
const {email,password} = authUser;
import "../support/commands";
import { filterTvByRatings } from "../support/e2e";
let tvShowsResults;


//Ratings filter testing for the Tv page. (This filter is the same for all other pages.)
describe("Ratings filter testing on the Discover Page.", () => {
    before(() => {

        cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
            "TMDB_KEY"
            )}&language=en-US&include_adult=false&page=1`).its("body").then((response) => {
        tvShowsResults = response.results;
          });

        cy.login(email,password);
    });

    describe("Testing", () => {

        const allRating = "All ratings";
        const bestRating = "Best rating (8+)";
        const goodRating = "Good rating (5-8)";
        const badRating = "Not great rating (0-5)";

        it("check if current page is Discover movies, navigate to tv shows & verify content", () => {
            cy.visit("/");
            cy.checkPageHeader("Discover Movies");
            cy.get("button").contains("TV").click();
            cy.checkUrl("/tv");
        });
        describe("All ratings filter", () => {
        it("selecting all ratings filter", () => {
            cy.get("#rating-select").click();
            cy.get("li").contains(allRating).click();
            });
        it("verifying and checking filter with content", () => {
            let allTvShows = filterTvByRatings(tvShowsResults,"All")    
            cy.get(".MuiCardHeader-content").should(
                "have.length",
                allTvShows.length
              );

              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(allTvShows[index].name);
              });
            });
        });

        describe("Best ratings (8+)", () => {
        it("selecting best ratings filter", () => {
            cy.get("#rating-select").click();
                cy.get("li").contains(bestRating).click();
                });
        it("verifying and checking filter with content", () => {
            let bestTvShows = filterTvByRatings(tvShowsResults,"Best")    
            cy.get(".MuiCardHeader-content").should("have.length",bestTvShows.length);
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(bestTvShows[index].name);
                });
            });
        });

        describe("Good ratings (5-8)", () => {
            it("selecting good ratings filter", () => {
                cy.get("#rating-select").click();
                    cy.get("li").contains(goodRating).click();
                    });
            it("verifying and checking filter with content", () => {
                let goodTvShows = filterTvByRatings(tvShowsResults,"Good")  
                cy.get(".MuiCardHeader-content").should("have.length",goodTvShows.length);
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(goodTvShows[index].name);
                 });
            });
        });

        describe("Not great ratings (0-5)", () => {
            it("selecting good ratings filter", () => {
                cy.get("#rating-select").click();
                    cy.get("li").contains(badRating).click();
                    });
            it("verifying and checking filter with content", () => {
                let badTvShows = filterTvByRatings(tvShowsResults,"Bad");
                cy.get(".MuiCardHeader-content").should("have.length",badTvShows.length);
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(badTvShows[index].name);
                 });
        });
    });

    describe("Logging out", () => {
        it("logout and check if redirected to /login", () => {
            cy.logout();
            cy.checkUrl("/login");
        });
    });
});
});