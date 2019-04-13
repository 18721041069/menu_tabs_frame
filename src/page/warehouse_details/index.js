import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

class WarehouseDetails extends Component {

    render() {
        const { } = this.props;

        return (
            <div>
                库存详情
            </div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(WarehouseDetails);