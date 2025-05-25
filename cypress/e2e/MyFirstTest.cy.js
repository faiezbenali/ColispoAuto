
describe('My First Test', () => {

    it('verify title positive-test', () => {
      //Steps
      cy.visit("https://opensource-demo.orangehrmlive.com")
      cy.title().should ('eq','OrangeHRM')
    })

    it('verify title negative-test ', () => {
        //Steps
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should ('eq','OrangeHRM123')
      })
 
    
})