import React, { useState } from "react"
import MainGraphic from "./MainGraphic/MainGraphic"
import UsersCount from "./UsersCount/UsersCount"
import UsersDetail from "./UsersDetail/UsersDetail"
import s from "./Dashboard.module.css"
import { getUsersDataThunk } from "../../redux/dashboard-reducer"

class Dashboard extends React.Component {
    componentDidMount(){
        const thiss = this
        const i = 0
        setInterval(function(){
            thiss.setState({
                new: i + 1 
            })
        }, 30000)
        if (i ==100 ) i = 0
        getUsersDataThunk()
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