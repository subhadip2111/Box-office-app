import { useState } from "react"




const Home=()=>{
  const [inputvalue,setinputValue]=  useState('')



  const onInputChange=(ev)=>{
    console.log(ev.target.value);

    setinputValue(ev.target.value)
  }
    return (
        <div> 

        <div>{inputvalue}</div>
        <button type="button" onClick={()=>{
            setinputValue("subhadip")
        }}> updated value</button>
          <input type="text" value={inputvalue} onChange={onInputChange}></input> 
            
        
        </div>
    )
}
export default Home