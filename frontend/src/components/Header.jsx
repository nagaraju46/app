import image from '../assets/logo.jpg'
import CartContext from '../store/Context'
import UserProgressContext from "../store/UserProgressContext";
import '../index.css'
import { useContext } from 'react'

export default function Header(){
    const cartcontext=useContext(CartContext)
    const userProgressCtx=useContext(UserProgressContext )
    

    return (<header id="main-header">
        <div id="title">
        <img id="img" src={image} alt="Logo"  />
        <h1>
            Foodreactapp
        </h1>
        </div>
        <nav>
        
        
            <button onClick={userProgressCtx.showCart}  >
                Cart  {cartcontext.items.length}
            </button>
        
        
        
        </nav>
    
        
      </header>)
}