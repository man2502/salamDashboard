import * as axios from "axios"



const instanceAxios = axios.create({
    baseURL: "http://127.0.0.0:3000",
    withCredentialsL: true
})


export const dashboardAPI = {
    async getGraphicData() {
        try {
            const response = await instanceAxios.get('/stat')
            return response.data
        }
        catch (e) {
            console.log("error with get")
        }
    }
}

export const usersAPI = {
    async getUsersData() {
        try {
            const response = await instanceAxios.get('/users')
            return response.data
        }
        catch (e) {
            console.log("error with get")
        }
    }
}