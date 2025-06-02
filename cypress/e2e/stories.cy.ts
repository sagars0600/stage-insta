/// <reference types="cypress" />
describe('Instagram Stories Feature (Mobile)', () => {
  beforeEach(() => {
    // Set mobile viewport before visiting the page
    cy.viewport('iphone-x'); // or any other mobile device like 'iphone-6', 'samsung-s10', etc.

    // Visit the home page
    cy.visit('/');
  });

  it('should display a list of stories', () => {
    // Check if the stories are loaded on mobile
    cy.contains('Instagram Stories').should('be.visible');
    cy.get('[class*="StoryThumbnail"]').should('have.length.at.least', 1);
  });
});
