import React from 'react';
import { Link } from 'react-router';
import {Nav, NavItem} from 'react-bootstrap';

class MainMenu extends React.Component {
  render() {
    return (

      <Nav bsStyle="tabs" justified>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem title="Item"><Link to="/foo">Foo</Link></NavItem>
        <NavItem title="Item"><Link to="/bar">Bar (requires AUTH)</Link></NavItem>
        <NavItem title="Item"><Link to="/else">Something else</Link></NavItem>
        <NavItem title="Item"><Link to="/logout">Logout</Link></NavItem>
    </Nav>

  );
  }
}

export default MainMenu;


// <ul>
//   <li>Menu:</li>
//   <li><Link to="/">Root</Link></li>
//   <li><Link to="/foo">Foo</Link></li>
//   <li><Link to="/bar">Bar</Link></li>
//   <li><Link to="/planetpluto">Planet Pluto</Link></li>{/* example for NotFoundPage */
// </ul>
