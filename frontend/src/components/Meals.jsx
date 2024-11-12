import { useState,useEffect } from "react";
import CartContext from "../store/Context";
import { useContext } from "react";




export default function Meals(){

    const [meals,setmeals]=useState([])
   const cartcontext= useContext(CartContext);
   console.log(cartcontext,"keyy")
    function handleAdd(key){
        cartcontext.addItem(key)


    }
   
    useEffect(()=>{
        async function fetchMeals(){
            const response= await fetch('http://localhost:3000/meals');
            if(!response.ok){
                console.log("error in ftecing the meals")
                alert("error in fecting the meal")
            }
            const meals=await response.json()
            setmeals(meals)
        }
        fetchMeals()

    
     } ,[])
    

    return(<>
   
   
   <ul id="meals">
         {meals.map(key=>{
            return(<li key={key.id} className="meal-item">
              <img className=".meal-item " src={`http://localhost:3000/${key.image}`} alt="meal picture" /> 
              <h3 className ="meal-item h3"> {key.name}</h3>  
                <br/>
            <p className=".meal-item-price"> ${key.price}</p>
            <p className=".meal-item-description">{key.description}</p>
            
            <button  onClick={()=>handleAdd(key)} >
               Add to Cart
            </button>
               
            </li>)
         })}
        </ul>
   
   
    </>)

}
