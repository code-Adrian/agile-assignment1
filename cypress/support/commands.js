import * as firebase from "firebase/app"
import * as auth from "firebase/auth"

const config = firebase.initializeApp ({
    apiKey: Cypress.env("FIREBASE_KEY"),
    authDomain: Cypress.env("FIREBASE_DOMAIN"),
    databaseURL: Cypress.env("FIREBASE_DATABASE"),
    projectId: Cypress.env("FIREBASE_PROJECT_ID"),
    storageBucket: Cypress.env("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: Cypress.env("FIREBASE_SENDER_ID")
});

const authenticate = auth.getAuth(config)

Cypress.Commands.add("login", (email,password) => {
    
    return auth.signInWithEmailAndPassword(authenticate,email,password);
});

Cypress.Commands.add("logout", () => {
    return auth.signOut(authenticate);
});

Cypress.Commands.add("checkUrl",(url) => {
    return cy.url().should("include",url);
});

Cypress.Commands.add("checkPageHeader",(pageText) => {
    return cy.get("h3").should("contain",pageText);
});