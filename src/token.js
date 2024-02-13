import { redirect } from "react-router"
import { getLogInUser } from "./user/userActions"
import store from './store'
export const getAuthKey = ()=>{
    const userId = localStorage.getItem("user")
    if (userId) {
        return userId
    }
    return null
}

export const checkLogin = ()=>{
    const getUser = getAuthKey()
    if (getUser) {
        return redirect('/admin')
    }
    return null
} 


export const checkAuth =()=>{
    const getUser = getAuthKey()
    const user = store.getState().user.user
    if (getUser && !user ) {
        store.dispatch(getLogInUser(+getUser))
    }
    
    if (!getUser) {
       return redirect('/login')
    }
    return null
}