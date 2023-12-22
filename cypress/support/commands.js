
const env = Cypress.env();
Cypress.Commands.add('GetShortCodesReports', (url, method,
  { header = { cookie: env.cookie },
    params = { shortcode_id: env.shortcode_id }
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  cy.request({
    method: method,
    url: `${domain}/${shortCodeUrl}`, // aFix string concatenation
    headers: header,
    qs: params, // Using qs for query parameters
  }).then((response) => response.headers['set-cookie']);
});