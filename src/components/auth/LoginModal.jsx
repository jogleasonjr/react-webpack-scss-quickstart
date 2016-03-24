import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Icon from '../shared/Icon';
import LoginForm from './LoginForm';


export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
    }

    handleSubmit() {
        this.refs.loginForm.submit();
    }

    cancelClicked(e) {
        e.preventDefault();
        this.props.loginCancel();
    };

    render() {

        const {loginRequired, login, isLoggingIn, applicationName, loginError} = this.props;
       if(loginError) console.log(loginError);
        const loginText = isLoggingIn ? "Logging in..." : "Login";
        return (
            <div className="static-modal">
                <Modal className="loginModal" show={loginRequired}>
                    <Modal.Header>
                        <Button className="close" disabled={isLoggingIn} onClick={this.cancelClicked}><span aria-hidden="true">&times;</span></Button>
                        <Modal.Title>Log in to {applicationName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <LoginForm ref="loginForm" onSubmit={login} isLoggingIn={isLoggingIn}/>
                    </Modal.Body>

                    <Modal.Footer>
                        { loginError ? <small className="loginError">{loginError.toString()}</small> : null }
                        { isLoggingIn ? <Icon icon='spinner  fa-spin'/> : null }
                        <Button disabled={isLoggingIn} onClick={this.cancelClicked}>Cancel</Button>
                        <Button disabled={isLoggingIn} onClick={this.handleSubmit}
                                bsStyle="primary">{loginText}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}