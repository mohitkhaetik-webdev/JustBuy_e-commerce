import { configureStore } from "@reduxjs/toolkit";
import Cartslice  from './cartslice'
import ProductSlice from './productslice'
export default configureStore({
    reducer:{
        cart:Cartslice,
        selectedProduct: ProductSlice
    }

})
