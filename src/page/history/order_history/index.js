import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class OrderHistory extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                指令记录
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(OrderHistory);