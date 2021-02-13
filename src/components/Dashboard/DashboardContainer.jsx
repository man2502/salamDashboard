import React, { useState } from "react"
import Dashboard from "./Dashboard"
import { connect } from "react-redux"
import {setScale} from "./../../redux/dashboard-reducer"
class DashboardContainer extends React.Component {
    render(){

    return(
        <Dashboard  graphicData ={this.props.graphicData} 
                    graphicScale={this.props.graphicScale}
                    setScale = {this.props.setScale}/>
    )
} 
}
const mapStateToProps =(state)=>{
    return {
        graphicData: state.dashboard.dashboardCategory,
        activeGraphicScale: state.dashboard.activeGraphicScale,
        graphicScale: state.dashboard.graphicScale[state.dashboard.activeGraphicScale]
    }
}

export default connect (mapStateToProps,{
    setScale
})(DashboardContainer)