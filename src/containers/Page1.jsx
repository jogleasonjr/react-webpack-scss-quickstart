import React from 'react';
import {connect} from 'react-redux';
import Heading from '../components/shared/Heading';
import Icon from './../components/shared/Icon';

class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        const username = user ? user.name : 'World';

        return (
            <div>
                <Heading text={`Hello, ${username}!`} /><Icon icon="heart fa-2x" />
            </div>);
    }
}

const mapStateToProps = (state) => {
    return { user: state.authentication.user};
};

export default connect(mapStateToProps)(Page1);
