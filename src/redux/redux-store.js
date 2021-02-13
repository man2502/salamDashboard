import { applyMiddleware, combineReducers, createStore } from "redux";
import dashboardReducer from "./dashboard-reducer";
import thunkMiddleWare from "redux-thunk"


const reducers = combineReducers({
    dashboard: dashboardReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare)) 

window.store = store
export default store