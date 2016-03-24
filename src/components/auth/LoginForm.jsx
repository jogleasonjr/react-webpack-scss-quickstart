import React from 'react';
import {reduxForm} from 'redux-form';
import {Input} from 'react-bootstrap';

const LoginForm = (props) => {

    const {fields: {username, password}, onSubmit, isLoggingIn} = props;

    return (
        <form onSubmit={onSubmit}>
            <Input disabled={isLoggingIn} type="text" {...username} placeholder="Username"/>
            <Input disabled={isLoggingIn} type="password" {...password} placeholder="Password"/>
        </form>
    );
};


export default reduxForm({
        form: 'login',
        fields: ['username', 'password']
    },
    state => ({
        initialValues: {
            username: state.global.storedUserName,
            password: state.global.storedPassword
        }
    })
)(LoginForm);