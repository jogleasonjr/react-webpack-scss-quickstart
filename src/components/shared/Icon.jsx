import React from 'react';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const icon = `fa fa-${this.props.icon}`;
        return (
            <span className='icon'>
                <i className={icon}></i>
            </span>
        );
    }
}