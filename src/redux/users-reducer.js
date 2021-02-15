import { usersAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA"



const initialState = {
   usersData:[
       {id:0, name:"Anvar", phone:"+99361157141" ,sex:"Male"},
       {id:1, name:"Bego", phone:"+99362626262" ,sex:"Male"},
       {id:2, name:"Meylis", phone:"+99361616161" ,sex:"Male"},
   ]
}



function setUsersData(data) {
    return ({ type: SET_USERS_DATA, data });
}


export default function usersReducer(state = initialState, action) {
    switch (action.type) {
       
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: action.data
            }

        default:
            return state
    }
}


export const getUsersDataThunk = () => {
    return async dispatch => {
        try {
            const response = await usersAPI.getUsersData()
            if (response.status == 1) {
                dispatch(setUsersData(response.data))
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }
}
