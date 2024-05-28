import React, {  createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const shopContext=createContext(null)
const getDefaultcart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItems,setcartitems]=useState(getDefaultcart())
    const AddtoCart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromcart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
        console.log(cartItems)
    }
    const getTotal=()=>{
        let totalamount=0
        for (const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo= all_product.find((product)=>(product.id === Number(item)))
                totalamount += iteminfo.new_price * cartItems[item];
            }
        }
        return totalamount;
    }
    const gettotalItems=()=>{
        let totalItems=0
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }
    const contextValue={all_product,cartItems,AddtoCart,removeFromcart,getTotal,gettotalItems}

    
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )

}

export default ShopContextProvider