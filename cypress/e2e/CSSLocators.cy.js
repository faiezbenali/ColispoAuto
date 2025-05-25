describe('CSSLocators', () => {
    it('csslocators', () => {
      cy.visit("http://www.automationpractice.pl/index.php");
  
     // cy.get("#search_query_top").type("T-Shirts"); // ID selector
      //cy.get(".search_query").type("T-Shirts");     //class selector 
      //cy.get("[name='search_query']").type("T-Shirts");     //class selector 
      cy.get("input.search_query[name='search_query']").type("T-Shirts");     //class attribute  selector 

      cy.get("[name='submit_search']").click();     // Attribute selector
      cy.get(".lighter").should("contain", "T-Shirts"); // Class selector with assertion
    });
  });
