const SET_GRAPHIC_SCALE = "SET_GRAPHIC_SCALE"


const week = [
    {
        name: 'Mon', uv: 4000, pv: 2400, amt: 2454,
    },
    {
        name: 'Tue', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Wed', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Thur', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Fri', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Sat', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Sun', uv: 3490, pv: 4300, amt: 2100,
    },
];

const year = [
    {
        name: 'Jan', uv: 4000, pv: 2400, amt: 2454,
    },
    {
        name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'May', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Jun', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Jul', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Aug', uv: 4000, pv: 2400, amt: 2454,
    },
    {
        name: 'Sep', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Oct', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Nov', uv: 4000, pv: 2400, amt: 2454,
    },
    {
        name: 'Dec', uv: 6000, pv: 1398, amt: 2210,
    },
    
]

const graphicScale= [
    {name:"Year", data:year},
    {name:"Week", data:week}
]

const initialState = {
    dashboardCategory : [
        { id: 0, fullName: "Users Summary", name: "Overall", color: "#F25DE3", description: "Total quantity for range" },
        { id: 1, fullName: "Online Now", name: "Online", color: "#FF9E01", description: "Maximum online for range" },
        { id: 2, fullName: "New Users", name: "New", color: "#27FFD8", description: "New registered users for range" }
    ],
    graphicScale,
    activeGraphicScale: 0
}


export const setScale = (scale) =>({type: SET_GRAPHIC_SCALE, scale}) 


export default function dashboardReducer  (state = initialState, action){
    switch(action.type){
        case SET_GRAPHIC_SCALE:
            return{...state, activeGraphicScale: action.scale}

        default :
            return state
    }
}




