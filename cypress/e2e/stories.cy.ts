/// <reference types="cypress" />
describe('Instagram Stories Feature', () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit('/');
  });

  it('should display a list of stories', () => {
    // Check if the stories are loaded
    cy.contains('Instagram Stories').should('be.visible');
    cy.get('[class*="StoryThumbnail"]').should('have.length.at.least', 1);
  });
})