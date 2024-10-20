import React from 'react'
import { useState } from 'react'

//hooks introduced 16.8 version 
export function Counter() {
 let [counter,setCounter] = useState(0)
  
  return (
    <div>
      <h1>{counter}</h1>  
      <button onClick={()=>{
        setCounter(counter+10)
        console.log(counter)
      }}>Increase</button>
    </div>
  )
}

