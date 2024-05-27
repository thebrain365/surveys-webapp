describe("template spec", () => {
   it("passes", () => {
      cy.visit("/");

      cy.get("h1").contains("Muano Makhokha");
   });

   it("database integration", () => {
      cy.visit("/");

      cy.contains("h3", "book 1");
   });
});
