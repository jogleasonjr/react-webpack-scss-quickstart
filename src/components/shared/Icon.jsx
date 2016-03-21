import React from 'react';

export default (props) => (
    <span className='icon'>
        <i className={`fa fa-${props.icon}`} />
    </span>
);