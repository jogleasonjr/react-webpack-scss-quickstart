import React from 'react';
import { Link, IndexLink } from 'react-router';

import Heading from './shared/Heading';
import icon from "file!../assets/images/cc.png";
import Icon from './shared/Icon';

const iconSize = 32;

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className="jumbotron">
                    <div className="text-center">
                        {this.props.children}
                    </div>
                    <dev className="nav text-center">
                        <ul>
                            <li><IndexLink to="/" activeClassName="link-active">Page 1</IndexLink></li>
                            <li><Link to="/page2" activeClassName="link-active">Page 2</Link></li>
                        </ul>
                    </dev>
                </div>
            </div>
        );
    }
}