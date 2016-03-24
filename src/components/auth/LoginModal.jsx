import React from 'react';
import {reduxForm} from 'redux-form';
import {Modal, Button} from 'react-bootstrap';


export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
    }

    handleSubmit() {
        this.refs.loginForm.submit();
    }

    cancelClicked(e){
        e.preventDefault();
        this.props.loginCancel();
    };

    render() {

        const {loginRequired, login} = this.props;

        return (
            <div className="static-modal">
                <Modal show={loginRequired}>
                    <Modal.Header>
                        <Modal.Title>Please log in</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                        <LoginForm ref="loginForm" onSubmit={login}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.cancelClicked}>Cancel</Button>
                        <Button onClick={this.handleSubmit} bsStyle="primary">Login</Button>
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
        const {fields: {username, password}, onSubmit} = this.props;

        return (
            <form onSubmit={onSubmit}>
                <input type="text" {...username} placeholder="Username"/>
                <input type="password" {...password} placeholder="Password"/>
            </form>
        );
    };
};

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