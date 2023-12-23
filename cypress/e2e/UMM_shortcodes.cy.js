describe('UMM ShortCodes Scenarios using Mobile Commons Platform', () => {
    const env = Cypress.env();



    context('Create shortcodes', () => {
        it('Get short code reports for super user', () => {


            cy.GetShortCodesReports("GET") // Corrected method name to match the command

                .then((response) => {

                    expect(response.status).to.eq(200);
                    expect(response.shortcode_number).to.eq("24474"); // Adjust property based on the actual response structure
                    expect(response.mos).to.eq("0"); // Adjust property based on the actual response structure
                    expect(response.mts).to.eq("89"); // Adjust property based on the actual response structure
                });
        });
        it('Attach short codes to acompany', () => {
            cy.PostsShortcCodeToCompany("POST")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.companies.is_parent).to.eq(true)
                    expect(response.companies.name).to.eq("Test Parent Originator")
                    expect(response.companies.short_name).to.eq("Parent Originator")
                    expect(response.companies.status).to.eq("Active")


                });
        });
        it.only('Detach company from shortcodes', () => {
            cy.DetachCompanyFromShortCodes("delete")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.active).to.eq(true);
                    expect(response.dedectied).to.eq(false)
                    expect(response.shortcode_number).to.eq("24474")

                });


        });
    });
});