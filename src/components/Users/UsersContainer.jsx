import React from "react"
import { connect } from "react-redux"
import { getUsersDataThunk } from "../../redux/users-reducer"
import Users from "./Users"


class UsersContainer extends React.Component {
    componentDidMount(){
        const thiss = this
        const i = 0
        setInterval(function(){
            thiss.setState({
                counter: i + 1 
            })
        }, 30000)
        if (i ==100 ) i = 0

        // getUsersDataThunk()
    }
    render(){
        
        return(
            <Users users ={this.props.users}/>
        )
    }
}



const mapStateToProps =(state)=>{
    
    return{
        users: state.users.usersData
    }
}


export default connect(mapStateToProps,
    {}    
)(UsersContainer)