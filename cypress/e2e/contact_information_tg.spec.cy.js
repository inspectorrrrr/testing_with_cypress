describe("Contact Information Check", () => {
  it("should open Google and search for Byndyusoft", () => {
    cy.viewport(1295, 944);
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").click();
    cy.get("#APjFqb").type("byndyusoft{enter}");
    cy.get('.LC20lb.MBeuO.DKV0Md').first().invoke('removeAttr', 'target').click()
    cy.origin('https://byndyusoft.com', () => {
    cy.get('.btn.btn--lg.btn--info.js-popup-callback-show').click()
    cy.get("a.popup-callback__footer-linkTg")
      .invoke('attr', 'href')
      .should('equal', 'http://t.me/alexanderbyndyu')
    });
  });
});
