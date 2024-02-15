import { redirect } from "react-router"
import { getItemsDetails, getLogInUser, getRestaurantDetails } from "./user/userActions"
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


export const checkAuth = async()=>{
    const getUser = getAuthKey()
    const user = store.getState().user.user
    if (getUser && !user ) {
        await store.dispatch(getLogInUser(+getUser))
        await store.dispatch(getRestaurantDetails(+getUser))
        await store.dispatch(getItemsDetails(store.getState().user.restaurant.id))
    }
    if (!getUser) {
       return redirect('/login')
    }
    return null
}