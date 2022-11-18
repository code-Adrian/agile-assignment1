const authUser = require('../fixtures/login.json');
import "../support/commands";
import { paginateLimit } from "../support/e2e";

let discoverMoviesPage2;
let discoverMoviesLastPage;
let discoverMoviesTotalPages;

let upcomingMoviesPage2;
let upcomingMoviesLastPage;
let upcomingMoviesTotalPages;

let popularMoviesPage2;
let popularMoviesLastPage;
let popularMoviesTotalPages;

let nowplayingMoviesPage2;
let nowplayingMoviesLastPage;
let nowplayingMoviesTotalPages;

let tvShowsPage2;
let tvShowsLastPage;
let tvShowsTotalPages;

describe("Paginate each endpoint and check the second and last page comparing response content.", () => {

    before(() => {
    
    cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=2`).its("body").then((response) => {
    discoverMoviesPage2 = response.results;

    cy.request(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=${paginateLimit(response.total_pages)}`).its("body").then((response) => {
    discoverMoviesLastPage = response.results;});

    discoverMoviesTotalPages = paginateLimit(response.total_pages);
    });
    
    cy.request(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=2`).its("body").then((response) => {
    upcomingMoviesPage2 = response.results;

    cy.request(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=${paginateLimit(response.total_pages)}`).its("body").then((response) => {
    upcomingMoviesLastPage = response.results;});
    
    upcomingMoviesTotalPages = paginateLimit(response.total_pages);
    });


    
    cy.request(`https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&page=2`).its("body").then((response) => {
    popularMoviesPage2 = response.results;

    cy.request(`https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&page=${paginateLimit(response.total_pages)}`).its("body").then((response) => {
    popularMoviesLastPage = response.results;});

    popularMoviesTotalPages = paginateLimit(response.total_pages);
    });



    cy.request(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&page=2`).its("body").then((response) => {
    nowplayingMoviesPage2 = response.results;

    cy.request(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&page=${paginateLimit(response.total_pages)}`).its("body").then((response) => {
    nowplayingMoviesLastPage = response.results;});

    nowplayingMoviesTotalPages = paginateLimit(response.total_pages);
});



    cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&page=2`).its("body").then((response) => {
    tvShowsPage2 = response.results;

    cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&page=${paginateLimit(response.total_pages)}`).its("body").then((response) => {
    tvShowsLastPage = response.results;});

    tvShowsTotalPages = paginateLimit(response.total_pages);
      });

      
});

    const {email,password} = authUser;

    it("check if the url is /login and authenticate login", () => {
    cy.visit("/");
    cy.checkUrl("/login");
    cy.login(email,password);
    });

    describe("Discover Movies Pagination", () => {

        it("Discover Movies header and page check", () => {
            cy.checkPageHeader("Discover Movies");
            cy.get("button[aria-label='page 1']");  
        });

        it("Paginate page 2 & compare content with response", () => {
            cy.get("button[aria-label='Go to page 2']").click()

            cy.get('p').should(($p) => {
                expect($p.first()).to.contain(discoverMoviesPage2[0].title)
            });

            cy.get(".MuiCardHeader-content").should("have.length", 20);
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(discoverMoviesPage2[index].title);
              });
        });

        it("Paginate to last page & compare content with response", () => {
            cy.get(`button[aria-label='Go to page ${discoverMoviesTotalPages}']`).click()

            cy.get('p').should(($p) => {
                expect($p.first()).to.contain(discoverMoviesLastPage[0].title)
            });

            cy.get(".MuiCardHeader-content").should("have.length", 20);
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(discoverMoviesLastPage[index].title);
              });
        });

    });

    describe("Upcoming Movies Pagination", () => {
        it("Navigating to Upcoming Movies and verifying page.", () => {
        cy.get("button").contains("Upcoming").click();
        cy.checkUrl("/upcoming");
        });

        it("Paginate page 2 & compare content with response", () => {
            cy.get("button[aria-label='Go to page 2']").click()

            cy.get('.MuiCardHeader-content p').should(($p) => {
                expect($p.first()).to.contain(upcomingMoviesPage2[0].title)
            });

            cy.get(".MuiCardHeader-content").should("have.length", 20);
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(upcomingMoviesPage2[index].title);
              });
        });

        it("Paginate to last page & compare content with response", () => {
            cy.get(`button[aria-label='Go to page ${upcomingMoviesTotalPages}']`).click()

            cy.get('.MuiCardHeader-content p').should(($p) => {
                expect($p.first()).to.contain(upcomingMoviesLastPage[0].title);
            });

            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(upcomingMoviesLastPage[index].title);
              });
        });
    });

    describe("Popular Movies Pagination", () => {
        it("Navigating to Popular Movies and verifying page.", () => {
            cy.get("button").contains("Popular").click();
            cy.checkUrl("/popular");
            });
    
            it("Paginate page 2 & compare content with response", () => {
                cy.get("button[aria-label='Go to page 2']").click();
    
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(popularMoviesPage2[0].title)
                });
    
                cy.get(".MuiCardHeader-content").should("have.length", 20);
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(popularMoviesPage2[index].title);
                  });
            });
    
            it("Paginate to last page & compare content with response", () => {
                cy.get(`button[aria-label='Go to page ${popularMoviesTotalPages}']`).click()
                
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(popularMoviesLastPage[0].title)
                });
    
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(popularMoviesLastPage[index].title);
                  });
            });
    });

    describe("Now Playing Movies Pagination", () => {
        it("Navigating to Now Playing Movies and verifying page.", () => {
            cy.get("button").contains("Now Playing").click();
            cy.checkUrl("/now_playing");
            });
    
            it("Paginate page 2 & compare content with response", () => {
                cy.get("button[aria-label='Go to page 2']").click()
    
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(nowplayingMoviesPage2[0].title)
                });
    
                cy.get(".MuiCardHeader-content").should("have.length", 20);
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(nowplayingMoviesPage2[index].title);
                  });
            });
    
            it("Paginate to last page & compare content with response", () => {
                cy.get(`button[aria-label='Go to page ${nowplayingMoviesTotalPages}']`).click()
                
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(nowplayingMoviesLastPage[0].title);
                });
    
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(nowplayingMoviesLastPage[index].title);
                  });
            });
    });

    describe("Popular Tv Shows Pagination", () => {
        it("Navigating to popular tv shows and verifying page.", () => {
            cy.get("button").contains("TV").click();
            cy.checkUrl("/tv");
            });
    
            it("Paginate page 2 & compare content with response", () => {
                cy.get("button[aria-label='Go to page 2']").click()
    
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(tvShowsPage2[0].name);
                });
    
                cy.get(".MuiCardHeader-content").should("have.length", 20);
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(tvShowsPage2[index].name);
                  });
            });
    
            it("Paginate to last page & compare content with response", () => {
                cy.get(`button[aria-label='Go to page ${tvShowsTotalPages}']`).click()
                
                cy.get('.MuiCardHeader-content p').should(($p) => {
                    expect($p.first()).to.contain(tvShowsLastPage[0].name);
                });
    
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(tvShowsLastPage[index].name);
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