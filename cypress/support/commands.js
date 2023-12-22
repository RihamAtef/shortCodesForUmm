
const env = Cypress.env();
Cypress.Commands.add('GetShortCodesReports', ( method,
  { header = { Cookie: env.cookie },
    params = { shortcode_id: env.shortcode_id }
  } = {}) => {
    const domain = env.domain; // Fix typo in customconfig
    const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
      const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}/reports`; // Replace with your actual URL
  
  cy.request({
    method: method,
    url:  url , // aFix string concatenation
    headers: header,
   // qs: params, // Using qs for query parameters
  }).then((response) => response.headers['set-cookie']);
});

Cypress.Commands.add("PostsShortcCodeToCompany", (method,
  { headers = { cookie: env.cookie, },
    body = { company_id: env.company_id },
    params = { shortcode_id: env.shortcode_id }
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}/companies`; // Replace with your actual URL
  cy.request({
    method: method,
    url: url,
    headers: headers,
    body: body
  }).then((response) => response.headers["set-cookie"]);
});