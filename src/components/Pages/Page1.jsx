import React from 'react';
import Heading from '../shared/Heading';
import Icon from './../shared/Icon';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Heading text="Hello, World!" /><Icon icon="heart" />
            </div>);
    }
}