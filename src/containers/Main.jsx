import React from 'react';
import {connect} from 'react-redux';
import TopNav from './../components/nav/TopNav';
import {login, logout, wat} from '../actions/authentication';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {applicationName} = this.props;
        
        return (
            <div className='container'>

                <TopNav applicationName={applicationName} {...this.props}/>

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
        applicationName: state.global.applicationName,

        //everything from auth
        ...state.authentication
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);