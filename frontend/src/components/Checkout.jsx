import Modal from '../UI/Modal'
import UserProgressContext from '../store/UserProgressContext'
import { useContext, useState } from 'react'
import CartContext from '../store/Context.jsx';
import '../index.css'



export default function Checkout(){
    const crtcontxt=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext)
    const carttotal=crtcontxt.items.reduce((totalprice,item)=>
        totalprice+(item.quantity* item.price),0
   )

   function handleSubmit(event){
    event.preventDefault()
    console.log("hii sai")
    const fd=new FormData(event.target)
    const cdata=Object.fromEntries(fd.entries());

        try {
            console.log("hii re")
            const response = fetch('https://app-0sx8.onrender.com/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    customer:cdata,
                    items:crtcontxt.items
                })
            });
            console.log("hii re")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Fetch error:', error);
        }
 
    alert("Order submitted succefully")
    crtcontxt.items=[]
   
}
  
    
    return (<Modal open={userProgressCtx.progress==='checkout'}>
         <form className='form' onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total price : $ {carttotal}</p>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                     id="street"
                    name="street"
                    required
                />
            </div>
          
            <div>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                     id="city"
                    name="city"
                    
                    required
                />
            </div>
            <button type="submit" onClick={userProgressCtx.hideCheckout} >Submit</button>
            <button onClick={userProgressCtx.hideCheckout}>close</button>
        </form>
        
    </Modal>)
}
