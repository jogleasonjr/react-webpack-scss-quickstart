import React from 'react';
import Heading from './shared/Heading';
import '../styles/Main.scss';
import icon from "file!../assets/images/cc.png";

const iconSize = 32;

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container"><Heading text="Hello, World!" /><img height={iconSize} width={iconSize} src={icon} /></div>);
    }
}