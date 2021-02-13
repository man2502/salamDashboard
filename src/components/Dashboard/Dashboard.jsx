import React, { useState } from "react"
import MainGraphic from "./MainGraphic/MainGraphic"
import UsersCount from "./UsersCount/UsersCount"
import UsersDetail from "./UsersDetail/UsersDetail"
import s from "./Dashboard.module.css"

class Dashboard extends React.Component {
    componentDidMount(){

    }
    render(){
      
    return (
        <div className={s.wrapper}> 
            <MainGraphic {...this.props}/>
            <UsersCount {...this.props}/>
            <UsersDetail {...this.props}/>
        </div>
    )
}
}

export default Dashboard