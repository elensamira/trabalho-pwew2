import React from "react";
import './style.css'
export const Contatos = ()=>{
    return(
        <>
<div className="formu">
    
    <form>
    <br></br><br></br>

     <input type="text" placeholder="Nome" required/>
       <br></br><br></br>   
       <input type="text" placeholder="Email" required/>
       <br></br><br></br>
       <input type="text" placeholder="Número" required/>
       <br></br><br></br>
       <input type="text" placeholder="Endereço" required/>
       <br></br><br></br>
       <input type="text" placeholder="Whatsapp" required/>
       <br></br><br></br>
       <input type="text" placeholder="Instagram" required/>
       <br></br><br></br>
       
       <button type="submit">Enviar</button>
    
        </form>
        </div>
        
        </>
        );
    };