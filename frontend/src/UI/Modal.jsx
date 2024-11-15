import { createPortal } from "react-dom"
import { useRef, useEffect } from "react";


export default function Modal ({children,open,className}){
  
    
    const dialog=useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
        return ()=>{
            dialog.current.close()
        }
    },[open]);
    return createPortal( <dialog ref={dialog} className={className}>
        {children}

    </dialog >, document.getElementById('modal')); 
}