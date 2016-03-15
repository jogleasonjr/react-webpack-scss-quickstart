import React from 'react';

export default class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.text };
    }

    render() {
        return <h1>{this.state.text}</h1>;
    }
}