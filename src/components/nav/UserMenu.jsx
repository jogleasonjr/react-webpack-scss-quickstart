import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Icon from '../shared/Icon';
import {connect} from 'react-redux';
import {login, logout} from '../../actions/authenticate';

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    dispatch(action) {
        this.props.dispatch(action);
    }

    handleLogin(e) {
        e.preventDefault();
        this.dispatch(login('a', 'b'));
    }


    handleLogout(e) {
        e.preventDefault();
        this.dispatch(logout());
    }

    render() {

        const {user} = this.props;

        if (user) {
            return (
                <NavDropdown eventKey={3} title={<span><Icon icon="user" /> {user.name}</span>} id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey={3.3} onClick={this.handleLogout.bind(this)}><Icon icon="sign-out"/> Logout</MenuItem>
                </NavDropdown>
            )
        }
        else {
            return <NavItem eventKey={2} href="#" onClick={this.handleLogin.bind(this)}><Icon icon="sign-in"/> Login</NavItem>;
        }
    };
    
}

const mapStateToProps = (state) => {
    return { user: state.user}
};

export default connect(mapStateToProps)(UserMenu);