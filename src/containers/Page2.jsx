import React from 'react';
import Heading from '../components/shared/Heading';
import Icon from './../components/shared/Icon';
import {connect} from 'react-redux';

class Page2 extends React.Component {

    render() {
        const {user} = this.props;
        const username = user ? user.name : 'cruel world'

        return (
            <div>
                <Heading text={`Goodbye, ${username}!`}/><Icon icon="hand-peace-o fa-2x"/>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {user: state.authentication.user}
};

export default connect(mapStateToProps)(Page2);