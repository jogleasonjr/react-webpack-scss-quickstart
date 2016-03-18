import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Icon from '../shared/Icon';

export default class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {user} = this.props;

        return (
            <NavDropdown eventKey={3} title={<span><Icon icon="user" /> {user.name}</span>} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}><Icon icon="sign-out" /> Logout</MenuItem>
            </NavDropdown>
        );
    }
}