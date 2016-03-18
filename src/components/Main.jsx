import React from 'react';
import TopNav from './nav/TopNav';
import "!style!css!sass!../styles/main.scss";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var user = {
            name: 'John Doe',
            username: 'jdoe'
        };

        return (
            <div className='container'>
                <TopNav applicationName="React App Template" user={user}/>
                <div className="jumbotron">
                    <div className="text-center">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}