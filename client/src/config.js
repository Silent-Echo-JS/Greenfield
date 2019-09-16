export default {
  oidc: {
    clientId: '0oa1cq5k79pAGynpx357',
    issuer: 'https://dev-334033.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  // resourceServer: {
  //   usersUrl: 'http://localhost:8000/api/users',
  // },
};
