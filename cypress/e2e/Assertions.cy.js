describe ("Asserions Demo", ()=>{

    it("Implicite Assertion", ()=>{

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // SHOULD  AND 
       // include eq : deux key qui supportent should
       // first we have capture the url (cy.url)

      /* cy.url().should('include','orangehrmlive.com')
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.url().should('contain','orangehrm')*/

       cy.url().should('include','orangehrmlive.com')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain','orangehrm')
       // negative assertion
       .and('not.contain','greenhrm')


       cy.title().should('include','Orange')
       .and('eq','OrangeHRM')
       .and('contain', 'HRM' )

       //we check now the visibility of any elements in our page 
       cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[1]/img').should('be.visible')//check the logo present or not
       .and('exist')  //check the logo exit or not

   // capture all the links in our page 
       cy.xpath('//a').should('have.length','5') //check the number of links

       cy.get('input[name="username"]').type('Admin')
       cy.get('input[name="username"]').should('have.value','Admin')

    })
/*
explicit assertions
except -BDD  (except is a part of BDD)
assert -TDD
*/
it('explicit assertions', () =>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('Admin123')
    cy.get('button[type="submit"]').click()

    let expName = 'manda user';
    cy.get('.oxd-userdropdown-name').then((x)=>{

      let actName=x.text()
      //BDD style 
      except(actName).to.equal(expName)
      except(actName).to.not.equal(expName)
      //TDD style
      assert.equal(actName,expName)

      assert.notEqual(actName,expName)

    })



})  

})