async function checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    if (authenticated && !this.state.userinfo) {
      const userinfo = await this.props.auth.getUser();
      this.setState({ authenticated, userinfo });
    } else {
      this.setState({ authenticated });
    }
  }
}

/* eslint-disable import/prefer-default-export */
export { checkAuthentication };
