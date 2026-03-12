import { Input } from "@hugeicons/core-free-icons";
import { createContext, useState } from "react";
import productsecond from "../basic";

export const Context = createContext();
function Usercontext({ children }) {
    let [cartslide, setcartslide] = useState(false)
    let [product,setproduct]=useState(productsecond)
    let [active, setactive] = useState("Home")
    let [input,setinput]=useState("")
    let data = { cartslide, setcartslide,product,setproduct,active, setactive,input,setinput}
    
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export default Usercontext

// export const Context =createContext()

// const Usercontext=({children})=>{
//  let [cartslide,setcartslide]  =useState(false);
//  let [productlist,setproductlist]=useState(products);
//  let data={cartslide,setcartslide,productlist,setproductlist}
 

// return(
//     <Context.Provider value={data} >
//         {children}
//     </Context.Provider>
//    )
// }
//    export default Usercontext
