/// <reference types="Cypress"/>
import { BTCMock, USDMock, mockSupportedCurrencies } from "../../mocks/mocks";
describe("E2E", () => {
  // and assign an alias
  it("Completes the full aplication flow", () => {
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "http://api-sandbox.uphold.com/v0/ticker/USD", // that have a URL that matches '/users/*'
      },
      USDMock // and force the response to be: []
    ).as("getUSDRates");
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "http://api-sandbox.uphold.com/v0/ticker/BTC", // that have a URL that matches '/users/*'
      },
      BTCMock // and force the response to be: []
    ).as("getBTCRates");
    cy.intercept(
      { url: "http://api-sandbox.uphold.com/**", middleware: true },
      (req) => {
        req.on("response", (res) => {
          // Wait for delay in milliseconds before sending the response to the client.
          res.setDelay(1000);
        });
      }
    );
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "/v0/assets", // that have a URL that matches '/users/*'
      },
      mockSupportedCurrencies // and force the response to be: []
    ).as("getSupportedCurrencies");

    cy.visit("http://localhost:3000/");

    cy.get("input").should("be.visible");
    cy.get("button").should("be.visible").contains("USD");
    cy.contains("Enter an amount to check the rates.").should("be.visible");

    cy.get("input").type("100").should("have.value", "100");

    cy.contains("BAT").should("be.visible");

    cy.get('[data-testid="BAT-conversion"]').contains(1000);
    cy.get("input").clear().type("10");
    //same value because of debounce
    cy.get('[data-testid="BAT-conversion"]').contains(1000);
    //after debounce
    cy.get('[data-testid="BAT-conversion"]').contains(100);

    //selecting new currency
    cy.contains("USD").click();
    cy.get('[data-testid="BTC-selector"]')
      .should("be.visible")
      .contains("BTC")
      .click()
      .get('[data-testid="conversion-loading-skeleton"]')
      .should("be.visible");

    cy.get('[data-testid="ETH-conversion"]').contains(183.73342524624684);

    //switching back to usd to test cache
    cy.contains("BTC").click();
    cy.get('[data-testid="USD-selector"]')
      .should("be.visible")
      .contains("USD")
      .click()
      .get('[data-testid="conversion-loading-skeleton"]')
      .should("not.exist");
  });
});
