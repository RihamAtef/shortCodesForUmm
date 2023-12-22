import customcofing from "../../cypress.config"


Cypress.Commands.add('GetShortCodesReports', (url, method,
  header =
    {
      cookie: env.cookie,
    },
  params =
    {
      shortcode_id: env.shortcode_id,
    },
) => {
  const domain =customcofing.e2e.domain
  const shortCodeUrl =  customcofing.e2e.shortCodeUrl
  cy.request({
    method: method,
    url: domain / shortCodeUrl,
  }).then((response) => response.headers['set-cookie']);
});