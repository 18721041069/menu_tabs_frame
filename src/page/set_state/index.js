import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class SetState extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                状态设置
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(SetState);