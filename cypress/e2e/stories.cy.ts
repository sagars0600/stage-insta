/// <reference types="cypress" />
describe('Instagram Stories Feature (Mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-x'); 
    cy.visit('/');
  });

  it('should display a list of stories', () => {
    cy.contains('Instagram Stories').should('be.visible');
    cy.get('[class*="StoryThumbnail"]').should('have.length.at.least', 1);
  });
    it('should open a story when clicked', () => {
    cy.get('[class*="StoryThumbnail"]').first().click();
    cy.get('img[alt="Story content"]').should('be.visible');
    cy.get('img[alt*="userAvatar"]').should('be.visible');
  });

  it('should navigate to next story item on right side tap', () => {
    cy.get('[class*="StoryThumbnail"]').eq(0).click();
    cy.get('img[alt="Story content"]').invoke('attr', 'src').as('firstImageSrc');
    cy.get('div[class*="w-full h-full cursor-pointer"]').click('right');
    cy.get('img[alt="Story content"]').invoke('attr', 'src').then((secondImageSrc) => {
      cy.get('@firstImageSrc').should('not.eq', secondImageSrc);
    });
  });

  it('should close the story viewer', () => {
    cy.get('[class*="StoryThumbnail"]').first().click();
    cy.get('button').contains('X').click();
    cy.get('img[alt="Story content"]').should('not.exist');
    cy.contains('Instagram Stories').should('be.visible');
  });


});
