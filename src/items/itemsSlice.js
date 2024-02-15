import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addItem:(state,action)=>{
      state.items.push(action.payload);
    }
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice.reducer;
