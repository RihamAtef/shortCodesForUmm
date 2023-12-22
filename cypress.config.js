const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    cookie: '',
    login: {
      username: 'rkamal@uplandsoftware.com',
      password: 'Dematic9000$$$$',
    },
    shortcode: '24474',
    platform: 'Upland Mobile Message',
    messaging: {
      mdn: '17815283414',
      type: 'SMS',
      type_mms: 'MMS',
      
     
      request_status: 'pending',
      short_message_single_part: '',
      short_message_single_part_MMS: '',
    },
    shortcode_id: "6e61843d-f9b7-4362-8825-fd9390f08dac",
    company_id:"df59ee31-2b60-42b7-98a3-76ae20bdf3a4",

    domain :"https://stag-mobileapi.uplandsoftware.com",
    shortcodes: "umm/api/v3/shortcodes"
    
  },
});
