import { applyMiddleware, combineReducers, createStore } from "redux";
import dashboardReducer from "./dashboard-reducer";
import thunkMiddleWare from "redux-thunk"
import usersReducer from "./users-reducer";


const reducers = combineReducers({
    dashboard: dashboardReducer,
    users: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare)) 

window.store = store
export default store