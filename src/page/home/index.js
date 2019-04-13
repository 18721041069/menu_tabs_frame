import React, { Component } from 'react';
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                home
            </div>
        )
    }

}

const mapState = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapState, mapDispatchToProps)(Home);