import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class HomeComponent extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {


        return (
            <div className="main-content">
                <h1>Home</h1>
                <p>Home Works!</p>

            </div>
        )
    }
}


const mapStateToProps = state => ({
    nodes: state.node,

});

const mapDispatchToProps = dispatch => bindActionCreators({

   
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
