import React from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Icon from './../shared/Icon';
import UserMenu from './UserMenu';

export default (props) => (
    <Navbar fixedTop inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"><Icon icon="hand-spock-o"/> {props.applicationName}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to="/"><NavItem href="#">Page 1</NavItem></IndexLinkContainer>
                <LinkContainer to="page2"><NavItem href="#">Page 2</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
                <UserMenu {...props}/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);