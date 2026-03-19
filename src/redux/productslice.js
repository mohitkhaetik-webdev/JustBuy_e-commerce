import { createSlice } from "@reduxjs/toolkit";

const ProductSlice=createSlice(
    {
        name:'selectedProduct',
        initialState:null,

        reducers:{
            showdetails:(state,action)=>{
                return action.payload
            }
        }

    }
);

export const{showdetails}=ProductSlice.actions
export default ProductSlice.reducer
