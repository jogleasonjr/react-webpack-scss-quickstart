/**
 * Created by jgleason on 3/18/2016.
 */
import React from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Icon from './../shared/Icon';
import UserMenu from './UserMenu';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {applicationName, user} = this.props;

        return (
            <Navbar fixedTop inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><Icon icon="hand-spock-o"/> {applicationName}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/"><NavItem eventKey={1} href="#">Page 1</NavItem></IndexLinkContainer>
                        <LinkContainer to="page2"><NavItem eventKey={2} href="#">Page 2</NavItem></LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <UserMenu user={user}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}