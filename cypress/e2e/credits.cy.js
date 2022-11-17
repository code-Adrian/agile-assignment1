const authUser = require('../fixtures/login.json');
import { removeDuplicateCredits,getTvShowByName } from "../support/e2e";
import "../support/commands";

const {email,password} = authUser;

const choosenTvShow = "House of the Dragon";
let tvShows;
let tvShow;
let tvCreditsCrew;
let tvCreditsCasts;

//Credits page testing for tv show. (Credits page is also available for all movie web pages)
describe("Tv Credits Poeple involved filter functionality", () => {
    before(() => {
        cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
    "TMDB_KEY"
    )}&language=en-US&include_adult=false&page=1`).its("body").then((response) => {
        tvShows = response.results;
        tvShow = getTvShowByName(response.results,choosenTvShow);
    });
        cy.login(email,password);
    });

    describe("Navigating to tv Show credits page.", () => {
        it("navigate from discover movies to Tv show list & verify url", () => {
            cy.visit("/");
            cy.checkPageHeader("Discover Movies");
            cy.get("button").contains("TV").click();
            cy.checkUrl("/tv")
        });
        it("choose tv Show & navigate to tv show details page", () => {

            cy.get('.MuiCardHeader-content p').should(($p) => {
                expect($p).to.contain(tvShow.name);
            });
            cy.get(`a[href='/tvShow/${tvShow.id}']`).click();
            cy.get("h3").should("contain",tvShow.name);
        });
        it("navigate to credits page & verify tv show credits id", () => {
            cy.get(`a[href='/creditsTv/${tvShow.id}']`).eq(0).click();
            cy.get("h3").should("contain",tvShow.name);
        });
    });

    describe("Toggling Crew / Casts", () => {
        before(() => {
            cy.request(`https://api.themoviedb.org/3/tv/${tvShow.id}/credits?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US`).its("body").then((response) => {tvCreditsCrew = removeDuplicateCredits(response.crew); tvCreditsCasts = removeDuplicateCredits(response.cast)});
        });    
        it("Crew content check", () => {
            const peopleInvolved = "Crew";
            cy.get("#involved-select").click();
            cy.get("li").contains(peopleInvolved).click();
            
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(tvCreditsCrew[index].name);
              });
        });
        it("Casts content check", () => {
            const peopleInvolved = "Cast"
            cy.get("#involved-select").click();
            cy.get("li").contains(peopleInvolved).click();
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(tvCreditsCasts[index].name);
              });
        });
    });
    describe("Logging out", () => {
        it("Logout and check if redirected to /login", () => {
            cy.logout();
            cy.checkUrl("/login");
        });
    });
});