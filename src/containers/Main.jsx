import React from 'react';
import {connect} from 'react-redux';
import TopNav from './../components/nav/TopNav';
import {login, logout, wat} from '../actions/authentication';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>

                <TopNav applicationName="React App Template" {...this.props}/>

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
        login: (username, password) => {
            dispatch(login(username, password));
        },

        logout: () => {
            dispatch(logout())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggingIn: state.authentication.isLoggingIn,
        user: state.authentication.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);