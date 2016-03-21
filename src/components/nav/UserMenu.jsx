import React from 'react';
import {NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Icon from '../shared/Icon';

export default ({user, login, logout, isLoggingIn}) => {

    const logoutClicked = (e) => {
        e.preventDefault();
        logout();
    };

    const loginClicked = (e) => {
        e.preventDefault();
        login('x', 'y');
    };

    if (user) {
        return (
            <NavDropdown eventKey={3} title={<span><Icon icon="user" /> {user.name}</span>} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.3} onClick={logoutClicked}>
                    <Icon icon="sign-out"/> Logout
                </MenuItem>
            </NavDropdown>
        );
    }
    else {
        const navIcon = isLoggingIn ? 'spinner  fa-spin' : 'sign-in';
        const navText = isLoggingIn ? 'Logging in' : 'Login';
        return (
            <NavItem eventKey={2} href="#" onClick={loginClicked}>
                <Icon icon={navIcon} /> {navText}
            </NavItem>
        );
    }
}