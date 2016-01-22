export default LogoutPage;

import React from 'react';
import auth from "../businessLogic/auth.js";
import {Alert} from 'react-bootstrap';
class LogoutPage extends React.Component {
  componentDidMount() {
    auth.logout();
  }
  render() {
    return (
      <div>
        <Alert bsStyle="warning">
          You are now logged out
        </Alert>
      </div>
    );
  }
}

export default LogoutPage;
