import React from 'react';
import { Link, IndexLink } from 'react-router';

import Heading from './shared/Heading';
import '../styles/Main.scss';
import icon from "file!../assets/images/cc.png";

const iconSize = 32;

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
                <img height={iconSize} width={iconSize} src={icon} />
                <div className="nav">
                    <ul>
                        <li><IndexLink to="/" activeClassName="link-active">Page 1</IndexLink></li>
                        <li><Link to="/page2" activeClassName="link-active">Page 2</Link></li>
                    </ul>
                </div>
            </div>);
    }
}