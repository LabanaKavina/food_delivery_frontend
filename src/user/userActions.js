import { userAction } from "./userSlice"

export const getUser = (user)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch("http://localhost:3030/login",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }

            const data = await response.json()
            if (data.length > 0) {
                dispatch(userAction.setUser(data[0]))
                localStorage.setItem('user',data[0].id)
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export const getLogInUser = (id)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch(`http://localhost:3030/user?id=${id}`)
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }

            const data = await response.json()
            dispatch(userAction.setUser(data[0]))
            localStorage.setItem('user',data[0].id)
        } catch (error) {
            console.log(error);
        }
    }
}

export const getRestaurantDetails = (id) => {
    return async (dispatch) => {
        try{
            const response = await fetch(`http://localhost:3030/user/restaurant?id=${id}`)
            if (!response.ok) {
                throw new Error('Could not fetch restaurant details')
            }
            const data = await response.json()
            dispatch(userAction.setRestaurant(data[0]))
        }catch(e){
            console.log(e);
        }
    }
}


export const addUser = (user)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch("http://localhost:3030/register",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }

            if (response.status === 200) {
                return true 
            }else{
                return false
            }
        } catch (error) {
            console.log(error);
        }
    }
}

