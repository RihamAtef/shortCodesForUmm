describe('UMM ShortCodes Scenarios using Mobile Commons Platform', () => {
    const env = Cypress.env();


    before(() => {
       
      

         cy.generateCookie(env.login.username, env.login.password).then((cookie) => {
              env.cookie = cookie;
         })
        
    });

    context(' Create shortcodes  ', () => {
        it.only('Get short code reports for super user', () => {

            // console.log("hello")
            cy.Getshortcodesreports(url, "GET")

                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.shortcode_number).t0.eq("24474")
                    expect(response.mos).to.eq("0")
                    expect(response.mts).to.eq("89")
                });
        })
    })
})