import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class SetReservoir extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                库区调整
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(SetReservoir);