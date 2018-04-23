import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.onLogin = this.onLogin.bind(this);
        //this.onLogout = this.onLogout.bind(this);
    }

    onLogin() {
        this.props.onLogin();
    }

    onLogout() {
        this.props.onLogout();
    }


    render() {
        let action;
        if (this.props.idToken) {
            action = <NavItem onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>;
        }
        else {
            action = <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>Github Searcher</Navbar.Brand>
                </Navbar.Header>
                <Nav>
                   {action}
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
