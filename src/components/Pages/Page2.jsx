import React from 'react';
import Heading from '../shared/Heading';
import Icon from './../shared/Icon';

export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Heading text="Goodbye, cruel world!" /><Icon icon="hand-spock-o" />
            </div>);
    }
}