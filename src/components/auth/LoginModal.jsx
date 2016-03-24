import React from 'react';
import {reduxForm} from 'redux-form';
import {Modal, Button, Input} from 'react-bootstrap';
import Icon from '../shared/Icon';


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

        const {loginRequired, login, isLoggingIn, applicationName} = this.props;
        const loginText = isLoggingIn ? "Logging in..." : "Login";
        return (
            <div className="static-modal">
                <Modal show={loginRequired}>
                    <Modal.Header>
                        <Button className="close" disabled={isLoggingIn} onClick={this.cancelClicked}>x</Button>
                        <Modal.Title>Log in to {applicationName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <LoginForm ref="loginForm" onSubmit={login} isLoggingIn={isLoggingIn}/>
                    </Modal.Body>

                    <Modal.Footer>
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


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fields: {username, password}, onSubmit, isLoggingIn} = this.props;

        return (
            <form onSubmit={onSubmit}>
                <Input disabled={isLoggingIn} type="text" {...username} placeholder="Username"/>
                <Input disabled={isLoggingIn} type="password" {...password} placeholder="Password"/>
            </form>
        );
    };
}
;

LoginForm = reduxForm({
        form: 'login',
        fields: ['username', 'password']
    },
    state => ({
        initialValues: {
            username: state.global.storedUserName,
            password: state.global.storedPassword
        }
    }))(LoginForm);