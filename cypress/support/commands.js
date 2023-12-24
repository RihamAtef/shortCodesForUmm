
const env = Cypress.env();
Cypress.Commands.add('GetShortCodesReports', (method,
  { header = { Cookie: env.cookie },
    params = { shortcode_id: env.shortcode_id }
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}/reports`; // Replace with your actual URL

  cy.request({
    method: method,
    url: url, // aFix string concatenation
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
Cypress.Commands.add("DetachCompanyFromShortCodes", (method,
  { headers = { cookie: env.cookie, },
    params = { id: env.company_id, shortcode_id: env.shortcode_id }
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}/companies/${env.company_id}`; // Replace with your actual URL
  cy.request({
    method: method,
    url: url,
    headers: headers,


  }).then((response) => response.headers["set-cookie"]);
});
Cypress.Commands.add("PostShortCode", (method, body,
  { headers = { cookie: env.cookie, },

    failOnStatusCode = false
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}`; // Replace with your actual URL
  cy.request(
    {
      method: method,
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: failOnStatusCode  // Include failOnStatusCode in the options
    }).then((response) => response.headers["set-cookie"]);


});
Cypress.Commands.add("SearchShortCode", (method,
  { headers = { cookie: env.cookie },
    body = {
      "filter": [],
      "page": 1,
      "page_size": 10,
      "sort": [
        {
          "column": "shortcode_number",
          "direction": "desc"
        },
        {
          "column": "shortcode_number",
          "direction": "desc"
        }
      ]
    },
    params = { company_id: env.company_id }

  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/search`; // Replace with your actual URL
  cy.request(
    {
      method: method,
      url: url,
      body: body,
      headers: headers,
      qs: params
    }).then((response) => response.headers["set-cookie"]);
});
Cypress.Commands.add("ShowShortCode", (method,
  { header = { Cookie: env.cookie },
    params = { shortcode_id: env.shortcode_id }
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}`; // Replace with your actual URL

  cy.request({
    method: method,
    url: url, // aFix string concatenation
    headers: header,
    // qs: params, // Using qs for query parameters
  }).then((response) => response.headers['set-cookie']);
});
Cypress.Commands.add("UpdateShortcode", (method,
  { headers = { cookie: env.cookie, },
    body = { company_id: env.company_id },
 
  } = {}) => {
  const domain = env.domain; // Fix typo in customconfig
  const shortCodeUrl = env.shortcodes; // Fix typo in customconfig
  const url = `${domain}/${shortCodeUrl}/${env.shortcode_id}`; // Replace with your actual URL
  cy.request({
    method: method,
    url: url,
    headers: headers,
    body: body
  }).then((response) => response.headers["set-cookie"]);
});