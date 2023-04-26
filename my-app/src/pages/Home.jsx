import {searchForShows}from "./../api/tvmaze"
import { useState } from "react"
const Home=()=>{
  
  const [searchStr,setSearchStr]=  useState('')
  const [apiData,setapiData]=useState(null)
  const [apidataError,setapidataError]=useState(null)
  const onSearchInputChange=(ev)=>{
    setSearchStr(ev.target.value)
  }

  const onSearch=async(ev)=>{
    ev.preventDefault()
   try {
    setapidataError(null)
    const result=await searchForShows(searchStr)
    setapiData(result)
   } catch (error) {
    setapidataError(error)
   }
  }


  const renderApiData=()=>{
    if(apidataError){
      return <div>Error occur :{apidataError.message}</div>
    }
    if(apiData){
return  apiData.map(data=><div key={data.show.id}>{data.show.name}</div>
    )}
    return null
  }
    return (
        <div> 
<form onSubmit={onSearch}>
<input type="text" value={searchStr} onChange={onSearchInputChange}></input>
<button type="submit">Search</button>
</form>

<div>
 {renderApiData()}
</div>
       </div>
    )
}
export default Home