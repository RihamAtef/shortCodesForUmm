

import _ from "lodash";
import requestbody, { company_id } from "./requestbody.cy"


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
                    const firstCompany = response.body.companies[0];
                    expect(firstCompany.is_parent).to.eq(true);
                    expect(firstCompany.name).to.eq("Test Parent Originator")
                    expect(firstCompany.short_name).to.eq("Parent_Originator")
                    expect(firstCompany.status).to.eq("Active")


                });
        });
        it('Detach company from shortcodes', () => {
            cy.DetachCompanyFromShortCodes("delete")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.active).to.eq(true);
              
                });


        });

        it("Create shortcode that has been created before", () => {


            cy.PostShortCode("post", requestbody, { failOnStatusCode: false })
                .then((response) => {
                    expect(response.status).to.eq(400);
                    expect(response.body.errors.shortcode_number[0]).to.eq("has already been taken");
                });
        });
        it("create new shortcode", () => {
            const requestBodyWithNewShortCode = _.cloneDeep(requestbody);
            requestBodyWithNewShortCode.shortcode_number = (Math.floor(Math.random() * (99999 - 11111)) + 11111).toString();// this is to generate random short code
            cy.log("shortcoderrr" + requestBodyWithNewShortCode.shortcode_number)
            cy.PostShortCode("post", requestBodyWithNewShortCode, { failOnStatusCode: false })
                .then((response) => {

                    expect(response.status).to.eq(200);
                    expect(response.body.active).to.eq(true);
                    expect(response.body.companies[0].is_parent).to.eq(true);
                    expect(response.body.companies[0].name).to.eq("QA Team Test Company")
                });
        });

        it("search shortcodes", () => {


            cy.SearchShortCode("post")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.records[0]).to.have.property('shortcode_number');
                });
        });
        it("show shortcode", () => {
            cy.ShowShortCode("get")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.active).to.eq(true);
                    expect(response.body.status).to.eq("Active")
                });
        });
        it("Update shortcode", () => {
            cy.ShowShortCode("put")
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.active).to.eq(true);
                    expect(response.body.status).to.eq("Active")
                });
        });
        



    })
})

