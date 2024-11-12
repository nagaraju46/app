
import Modal from '../UI/Modal.jsx'
import { useContext } from 'react'
import CartContext from '../store/Context.jsx';
import UserProgressContext from "../store/UserProgressContext";
import '../index.css'
export default function Cart(){
    const crtcontxt=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext)
    function handleDelete(key){
        crtcontxt.removeItem(key)
        

    }
    function handleAdd(item){
        crtcontxt.addItem(item)
    }
    const carttotal=crtcontxt.items.reduce((totalprice,item)=>
         totalprice+(item.quantity* item.price),0
    )
   
    return (
        <>
        <Modal className='cart' open= {userProgressCtx.progress==='cart'}>
        <ul >
        {crtcontxt.items.map(item=>{
            return (<li key={item.id} className='li'>
            <img className="img" src={`http://localhost:3000/${item.image}`} alt="meal picture" />
              <h3 className =""> {item.name}</h3>  
                <br/>
            <p className=""> ${item.price}</p>
            <p className="">{item.description}</p>
             <div>
            <button onClick={()=>handleAdd(item)}>+</button>
            
            <p className=''>{item.quantity}</p>
            

            <button onClick={()=>handleDelete(item.id)}>-</button>
            </div>
            </li>)
        })}

        </ul>
        <p className='cart-total'>Total: ${carttotal}</p>
        <p className='modal-actions'>
            <button onClick={userProgressCtx.hideCart}>close</button>
            {

            crtcontxt.items.length===0? null: (<button onClick={userProgressCtx.showCheckout}> Go to Checkout</button>)
            }
            </p>
        </Modal>
        </>
       
    )
   

}


