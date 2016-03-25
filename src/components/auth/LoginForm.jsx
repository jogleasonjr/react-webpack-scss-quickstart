import React from 'react';
import {reduxForm} from 'redux-form';
import {Input} from 'react-bootstrap';

const LoginForm = (props) => {

    const {fields: {username, password}, onSubmit, isLoggingIn} = props;

    return (
        <form onSubmit={onSubmit}>
            <div>
                {username.touched && username.error && <div className="loginError">{username.error}</div>}
                <Input disabled={isLoggingIn}
                       bsStyle={(username.touched && username.error) ? "error" : username.touched ? "success" : null}
                       hasFeedback type="text" {...username} placeholder="Username"/>
            </div>
            <Input disabled={isLoggingIn} type="password" {...password} placeholder="Password"/>
        </form>
    );
};

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 3) {
        errors.username = 'Must be at least 3 characters';
    }

    return errors;
};

export default reduxForm({
        form: 'login',
        fields: ['username', 'password'],
        validate
    },
    state => ({
        initialValues: {
            username: state.global.storedUserName,
            password: state.global.storedPassword
        }
    })
)(LoginForm);