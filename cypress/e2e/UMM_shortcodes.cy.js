describe('UMM ShortCodes Scenarios using Mobile Commons Platform', () => {
    const env = Cypress.env();
    const url = "https://stag-mobileapi.uplandsoftware.com/"; // Replace with your actual URL

 
    context('Create shortcodes', () => {
        it.only('Get short code reports for super user', () => {
            cy.GetShortCodesReports(url, "GET") // Corrected method name to match the command
 
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.shortcode_number).to.eq("24474"); // Adjust property based on the actual response structure
                    expect(response.mos).to.eq("0"); // Adjust property based on the actual response structure
                    expect(response.mts).to.eq("89"); // Adjust property based on the actual response structure
                });
        });
    });
});