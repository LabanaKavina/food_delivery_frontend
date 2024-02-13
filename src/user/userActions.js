import { userAction } from "./userSlice"

export const getUser = (user)=>{
    return async(dispatch)=>{
        try {
            console.log(user);
            const response = await fetch("http://localhost:3030/login",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
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



export const getLogInUser = (id)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch(`http://localhost:3030/user?id=${id}`)
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }

            const data = await response.json()
            console.log(data);
            dispatch(userAction.setUser(data[0]))
            localStorage.setItem('user',data[0].id)
        } catch (error) {
            console.log(error);
        }
    }
}

