import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class RollingPlan extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                轧制计划
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(RollingPlan);