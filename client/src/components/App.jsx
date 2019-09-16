import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Dashboard from './DashboardComponents/Dashboard.jsx';
import Login from './Auth/Login.jsx'
import About from './HomePages/About.jsx'

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Security issuer='https://dev-785992.okta.com/oauth2/default'
          clientId='0oa1cspbxnLfDPYQb357'
          redirectUri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >

          <Navbar />
          <Route path="/about" component={About} />
          
          <SecureRoute path="/" exact={true} component={Dashboard} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-785992.okta.com' />} />
          <SecureRoute path='/implicit/callback' exact={true} component={Dashboard} />
        </Security>
      </HashRouter>
    );
  }
}

export default App;
