"use client"

import { useState } from "react";


const Page = () => {
  const [showSecret,SetShowSecret]= useState(false)

  const handleClickButton = () => {
    SetShowSecret(!showSecret)   
  }


    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
        <button onClick={handleClickButton} className="bg-blue-500 p3 rounded-md">{showSecret ? 'Ocultar' : 'Mostrar'}</button>
        {showSecret &&        
           <div className="bg-blue-500 rounded-md p-3 mt-5">Área Secreta</div>
        }
      </div>

      
    );
}


export default Page ;