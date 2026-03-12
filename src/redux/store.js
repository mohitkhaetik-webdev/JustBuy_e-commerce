import { configureStore } from "@reduxjs/toolkit";
import Cartslice  from './cartslice'
export default configureStore({
    reducer:{
        cart:Cartslice
    }
})
