import React from 'react';
import Heading from '../shared/Heading';
import icon from "file!../../assets/images/cc.png";

const iconSize = 32;

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Heading text="Hello, World!" />
            </div>);
    }
}