describe('XPathLocators', ()=> {

it('find number of products', () => {
cy.visit("http://www.automationpractice.pl/index.php");

cy.xpath('//*[@id="best-sellers_block_right"]').should('have.length', '6');

})


})