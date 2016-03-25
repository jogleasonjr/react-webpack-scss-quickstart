import React from 'react';
import {connect} from 'react-redux';
import TopNav from './../components/nav/TopNav';
import {login, logout, loginPrompt, loginCancel} from '../actions/authentication';
import LoginModal from '../components/auth/LoginModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loginPrompt();
    }


    render() {
        return (
            <div className='container'>
                <LoginModal{...this.props} />
                <TopNav {...this.props}/>

                <div className="jumbotron">
                    <div className="text-center">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginCancel: () => {
            dispatch(loginCancel());
        },

        loginPrompt: () => {
            dispatch(loginPrompt());
        },
        
        login: (username, password) => {
            dispatch(login(username, password));
        },

        logout: () => {
            dispatch(logout());
        }
    };
};

const mapStateToProps = (state) => {
    return {
        applicationName: state.global.applicationName,
        //username: state.form.username,
        //password: state.form.password,
        //everything from auth
        ...state.authentication
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
