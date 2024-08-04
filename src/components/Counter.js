import React from 'react'
import { useState } from 'react'

//hooks introduced 16.8 version 
function Counter() {
 let [count,setCount] = useState(0)
  
  return (
    <div>
      <h1>{count}</h1>  
      <button onClick={()=>{
        setCount(count+10)
        console.log(count)
      }}>Increase</button>
    </div>
  )
}

