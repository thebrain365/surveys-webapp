describe("template spec", () => {
   it("passes", () => {
      cy.visit("/");

      cy.get("p").contains("Personal Details");
   });
});
