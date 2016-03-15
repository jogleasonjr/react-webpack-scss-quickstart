import React from 'react';
import Heading from '../shared/Heading';

export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Heading text="Goodbye, cruel world!" />
            </div>);
    }
}