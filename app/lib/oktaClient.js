const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-334033.okta.com',
  token: '006pMD5Prydwi_udjEavcpxNMpajcEimO7PHird_K1',
});

module.exports = client;
