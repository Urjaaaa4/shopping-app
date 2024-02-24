import React, { createContext,useState } from 'react'
import { PRODUCTS } from '../product';
export const ShopContext=createContext(null);
 
const getdefault=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length +1;i++){
        cart[i]=0;
    }
    return cart;
}

export default function ShopContextProvider(props) {
    const[cartItems,setCartItems]=useState(getdefault());
    
    
    const getTotal=()=>{
        let total=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let info = PRODUCTS.find((product)=> 
                product.id===Number(item));

                total += cartItems[item] * info.price;
            }
            
        }
        return total;
    }

    const addItem=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
   const updatecart=(newAmount,itemId)=>{
 setCartItems((prev)=>({...prev,[itemId]:newAmount}))
   }
    const contextval={getTotal,cartItems,addItem,removeCart,updatecart}
    return (
    <ShopContext.Provider value={contextval}>{props.children}</ShopContext.Provider>
  )
}
