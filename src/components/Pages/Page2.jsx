import React from 'react';
import Heading from '../shared/Heading';
import Icon from './../shared/Icon';
import {connect} from 'react-redux';

 class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        const username = user ? user.name : 'cruel world'

        return (
            <div>
                <Heading text={`Goodbye, ${username}`} /><Icon icon="hand-peace-o  fa-2x" />
            </div>);
    }
}

const mapStateToProps = (storeState) => {
    console.log('wat');
    return { user: storeState.user}
};

export default connect(mapStateToProps)(Page2);