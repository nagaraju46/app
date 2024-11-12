import { createContext } from "react";
import { useState } from "react";
const UserProgressContext=createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
})

export function UserProgressContextProvider({children}){
    const [userProgress,setUserProgress]= useState('');
    function showCart(){
        setUserProgress('cart')
        console.log("show Cart")
    }
    function hideCart(){
        setUserProgress('')
        console.log("hideCart")
    }
    function showCheckout(){
        
        setUserProgress('checkout')
    }
    function hideCheckout(){
        setUserProgress('')
    }
    const userProgressCtx={
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )

}

export default UserProgressContext
