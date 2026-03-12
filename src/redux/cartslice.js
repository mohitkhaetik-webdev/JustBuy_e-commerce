import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart',
    initialState: [],

    reducers: {

        Additem: (state, action) => {
            let existitem = state.find((item) => (item.id === action.payload.id))
            if (existitem) {
                return state.map((item) => (item.id === action.payload.id) ? { ...item, qty: item.qty + 1 } : item)
            }
            else {
                state.push(action.payload)
            }
        },

        incrementitem:(state,action)=>{
            return state.map((item) => (item.id === action.payload.id) ? { ...item, qty: item.qty + 1 } : item)
        },


        decrementitem:(state,action)=>{
            return state.map((item) => (item.id === action.payload.id) ? { ...item, qty: item.qty - 1 } : item)
        },

        removeItem:(state,action)=>{
            return state.filter((item)=>(item.id!==action.payload.id))
        },
        


    }
})

export const { Additem,incrementitem,decrementitem,removeItem} = Cartslice.actions
export default Cartslice.reducer
