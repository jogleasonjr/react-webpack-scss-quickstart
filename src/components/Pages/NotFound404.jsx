import React from 'react';
import Heading from './../shared/Heading';
//import '../../styles/main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container"><Heading text="404 Not Found" /></div>);
    }
}