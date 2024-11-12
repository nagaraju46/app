import {  useReducer } from "react";
import { createContext } from "react";
const CartContext=createContext({
    items: [],
    addItem: (item)=>{},
    removeItem: (id)=>{}
});

function cartReducer(state,action){
    if(action.type==='ADD_ITEM'){
        //Need add item to items
        const r=state.items.findIndex((item)=>{
            return item.id===action.item.id
        });
        const updatedItems=[...state.items]
        if(r>-1){
            const updatedItem={
                ...state.items[r],
                quantity: state.items[r].quantity+1
            };
           updatedItems[r]=updatedItem; 
            
             
        }

        else{
            updatedItems.push({...action.item, quantity: 1})

        }
        return {...state, items:updatedItems};
    }
    if(action.type==='DELETE_ITEM'){
        //Need to del item
        
        const r=state.items.findIndex((item)=>{
            return item.id===action.id
        });
        const updatedItems=[...state.items]
        const updatedItem={
            ...state.items[r],
            quantity: state.items[r].quantity-1
        };
        updatedItems[r]=updatedItem
        console.log(updatedItem,updatedItems)
        if(updatedItem.quantity==0){
            updatedItems.splice(r,1)
        }
        
    
        
    
      
        
        return {...state, items:updatedItems}
    }
}

export function CartContextProvider({children}){
   const[cart,disptachCart]= useReducer(cartReducer,{items: []});
 
   function addItem(item){
    disptachCart({type: 'ADD_ITEM', item} )
   }
   function removeItem(id){
    disptachCart({type: 'DELETE_ITEM', id} )
   }
   const cartContext={
    items: cart.items,
    addItem,
    removeItem
   }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
   
    
}
 export default CartContext; 