const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('1094398597708-13q4ks7ivdptvr8ro089mntmsr5lva99.apps.googleusercontent.com');
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '1094398597708-13q4ks7ivdptvr8ro089mntmsr5lva99.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
module.exports = {
  verify
}