import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Button, Modal, Input, ButtonInput, Panel} from 'react-bootstrap';
import auth from "../businessLogic/auth.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedLunch: 'Nothing selected'};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log('Login handleClick');
    event.preventDefault();
    const email = this.refs.email.value;
    const pass = this.refs.pass.value;
    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true });
      const { location } = this.props;
      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname);
      } else {
        this.context.router.replace('/');
      }
    });
  }
  render() {
    let clickHandler = this.handleClick;
    let header = "Login";
    if (this.state.error) {
      header = "Bad login information, try again";
    }
    return (
      <div className="loginPanel">
        <Panel header={header}>
        <form>
         <Input type="email" ref="email" label="Email Address" placeholder="Enter email" defaultValue="joe@example.com"/>
         <Input type="password" ref="pass" label="Password" placeholder="Enter password" />
         <Button bsStyle="primary" onClick={clickHandler}>Login</Button>
        </form>
        </Panel>
      </div>
    );
  }
}

export default Login;
