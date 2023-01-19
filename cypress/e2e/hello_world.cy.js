describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://www.google.com");
    cy.get("button > div").contains("Reject all").click();
    "hello world".split("").forEach((char) => {
      if (!!char.trim()) {
        // cy.visit('https://www.google.com')
        if (char === "h") {
          cy.get("input[type=text]").type(char + "{enter}");
          cy.get('a:contains("Images")').click();
        } else {
          cy.get("input[type=text]")
            .clear()
            .type(char + "{enter}");
        }
        cy.wait(2000);
        cy.get('div[data-cr="0"]', { timeout: 10000 }).then((r) => {
          cy.wrap(r.eq(0))
            .find("img")
            .then((image) => {
              cy.get(image[0]).click();
              cy.wait(2000);
              cy.get(
                "#Sva75c > div.DyeYj > div > div.dFMRD > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div.nIWXKc.JgfpDb > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id.b0vFpe > div > a > img"
              )
                .invoke("attr", "src")
                .then((img) => {
                  cy.downloadFile(img, "Downloads", char + ".png");
                });
            });
        });
      }
    });
    cy.exec('start chrome C:/Users/cmcleod/Documents/helloWorld/index.html')
  });
});
