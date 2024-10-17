"use client"

import { useEffect, useState } from "react"

const Page = () => {

    const [firstName, setFirstName] = useState('Alan')
    const [lastName , setLastName] = useState('Silva')

    const fullName = firstName + ' ' + lastName

    return (
      <div className="">
        <p className="mb-10 flex justify-center">Meu nome é {fullName} </p>           
          <hr />
          <div className="flex justify-center">

              <button className="border border-blue-400 m-3 p-3" onClick={()=> setFirstName('Samir')}>Mudar para Samir</button>
              <button className="border border-blue-400 m-3 p-3" onClick={()=> setLastName('Jucy')}>Mudar para Jucy</button>

          </div>
    
      </div>

      
    );
}


export default Page ;