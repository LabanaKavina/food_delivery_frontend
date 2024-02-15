import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : null,
        restaurant : null,
        items : []
    },
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload
        },
        setRestaurant : (state , action) => {
            state.restaurant = action.payload
        },
        setItems : (state , action) => {
            state.items = action.payload
        }
    }
})

export const userAction = userSlice.actions
export default userSlice.reducer