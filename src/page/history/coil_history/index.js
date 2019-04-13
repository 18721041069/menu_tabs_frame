import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class CoilHistory extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                钢卷记录
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(CoilHistory);