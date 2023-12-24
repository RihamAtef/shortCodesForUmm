const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    cookie: 'ajs_anonymous_id=6de84b9b-4d36-45a8-a621-2e7982cfafe0; _uetvid=07eb2e8082ea11ee8d55fdccdb0d1e99; _hjSessionUser_2253297=eyJpZCI6ImMxMTdhYWM1LWQ5YzMtNTBhZi04ODQwLTlkYTljNDIwYTI5YyIsImNyZWF0ZWQiOjE2OTk5NjUyMTY3MzMsImV4aXN0aW5nIjp0cnVlfQ==; _gcl_au=1.1.1675843886.1699965217; _ga=GA1.2.221372318.1699965218; _mkto_trk=id:951-EJA-050&token:_mch-uplandsoftware.com-1699965218071-53991; OptanonAlertBoxClosed=2023-11-14T12:33:40.697Z; OptanonConsent=isGpcEnabled=0&datestamp=Tue+Nov+14+2023+14%3A33%3A40+GMT%2B0200+(Eastern+European+Standard+Time)&version=202309.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0004%3A1%2CC0002%3A1%2CC0003%3A1%2CC0001%3A1; _ga_DF0JZZV4PG=GS1.2.1699965218.1.1.1699965220.58.0.0; __q_state_LDisdvTdjHHeeMLS=eyJ1dWlkIjoiOWIxMTA3NzQtZGNlMC00NjI1LTk5ZTktYTMyMTlmNTFjZGU2IiwiY29va2llRG9tYWluIjoidXBsYW5kc29mdHdhcmUuY29tIiwibWVzc2VuZ2VyRXhwYW5kZWQiOmZhbHNlLCJwcm9tcHREaXNtaXNzZWQiOmZhbHNlLCJjb252ZXJzYXRpb25JZCI6IjEyNjczMTI0MDMxNjAyMDMzODYifQ==; _ga_4YKTL7PJQR=GS1.1.1699965217.1.1.1699965233.0.0.0; jwt=S42un7hQ4wE7R9bbbm4fAVJkft4SjegDmUShP3+QkMpDixa587P9JhGBXKMrdcMiTRzXiwPJW2dmelq7h+MZeRZqkJ3tAgwRpCURNUvfNY86GOiwgmQnfGKz2R87D7zvUzlnr2E23c/O6X9IWkqCjGaO63/jtJpCDW//wkgAxA3wzOWXKcnE1ZtDZDwDkqc3DzTGS9xKpB+NsauyCphegXnX4Zm2kxykVvedNXgGgwNFSI6j9mM0tycFiRr3v2UibSimljqgWS17taVPGkGAnfXCkzQrWOkX94vnxbE2VR/CdHvvEOfcUgbnynyRqTYFyioWzv2TekooURdVddutjk/1u6cBDLja35WZMRo6x+BDLr17SNz/3AerHV4zextKGmL0oCaU1iQd1VZhqj7Xtj6ENoCyBAmXo6hv2JPFnNSmBxMBoND3r5S6uAkp8yJ1PTgvDe3tK9zBqBXK7/eloNi0uyf5ogwNYbAy4TFHeKRFewdwVQ+bA0LSDhYES+vEzFls5WzPGMDGFKzKqgxtsyOY99XWaSHR39t18+i/JPU3gOOr8TmXWAzLLMn7hrLH5e2Epe+e64XnxAVTnEARL51WfizyCGVEV99PGRSgAwNeOy7dTKR3uOS+WqQdYvrGN/IZ+vqel69ywOWznmY42aiJ0lOUdfZTQacQswBu6Z9/+xqLeaoWcQHEt/AxVQpRqAkNHxWlIsfZOWuxfWrMnOsu4hykOHldMO5Eh3276vIIAwUVAC1pS+J5YvJJB4ERipc/9puHy33WasKPXMDm4zCdho5jnqj4ff44iQ76Rs2+uMEfXg6g0bBlUodD+gucBI8R0/t3mxhXtaTiA/Mlhlmjb3huVYdH1qwOQ4rZm73AKezr7AOS02ZXzC2U0gOc3R+Ym0ZwHPARvHa/w3fu5wC0D4WZ6zfUVmitxaN3VuPnyb6Pgjcm8xCkwP+J8ugUXfji7sOXpaYowzoryymG191qJu3CW2R1jvhg4gk0dzlcHaakkMmD0e7QZdmAnlzuvQLGM1/DOFCoHNKp5Y/sk/8Cu8cVhZFMi75l+MW8NHNnVhUi+WVUXXkC3SD+tMx2tT7jqSGC5nbsvEn6ouYxq8GgFd0w95Pt/l2cLbqRNIh8/ADMc/tchW07WuPubmzdPaSRergHKvkWYRRa10KXRY1+V6KtEntBR1CNrYeyRPaKUlicNLVEFTy29GiWFqjTk9ovTtlOQa0iAFckfzbxH4ryDZ8BgFl/BIuEb5K+UINsv8RxEU3xTpBfnL42BNRa6TCj2DjaOwnJyglSIC2WJ6UqFLKpLD2RUxZMRryrAJIhUhMLXptHUr2/yupsQ5mLOmjEBf+k4wO99RsQvPDLJVEG2ddFr/S8CDG3xDYLISGkphX/8a0L+c58TTAGSI/GRyQcZfiy0ZTUOI35T1kDebkwLe9jwhkiwRH3VyakEu+ekvOnpUt/kxd8Qkr/21ZgzLN2+QS87yqQC2mdPiLPjzOWgPkg9BfR/1t/QRpe0iMjvavFWfemwoHEGj0qIkt8h+HdixkiR5vxo+Zjfe7j9YqL0zlQ5fDxc9rHD9Gps4cTmfUGy7qf2hgfPWMEJuyqSSGfGc9WWNCn7jwYdhQDKJtR+fHRgXnmBIjwU58NkGRtOp2x; authly=true',
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
