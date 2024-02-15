import { itemsAction } from "./itemsSlice"
export const getItemsDetails = (id) => {
    return async (dispatch) => {
        try{
            const response = await fetch(`http://localhost:3030/item/?hotel_id=${id}`)
            if (!response.ok) {
                throw new Error('Could not fetch items')
            }
            const data = await response.json()
            dispatch(itemsAction.setItems(data))
        }catch(e){
            console.log(e);
        }
    }
}


export const addItem = (item)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch("http://localhost:3030/item",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(item)
            })
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }

            const data = await response.json()
            if (data.length !== 0) {
                dispatch(itemsAction.addItem(data[0]))
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteItem = (itemId)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch(`http://localhost:3030/item/${itemId}`,{
                method:'DELETE',
                headers: {'Content-Type':'application/json'},
            })
            if (!response.ok) {
                throw new Error('Could not fetch User')
            }
            if (response.status ===200) {
                dispatch(itemsAction.deleteItem(itemId))
            }
           
        } catch (error) {
            console.log(error);
        }
    }
}

