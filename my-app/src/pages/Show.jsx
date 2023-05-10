import { Link,useParams } from "react-router-dom"
//import { useEffect,useState } from "react"
//import { useParams } from "react-router-dom"
import {getShowById} from "../api/tvmaze"
import { useQuery } from "@tanstack/react-query"
import ShowMainData from "../component/shows/ShowMainData"
import Details from "../component/shows/Details"
import Seasons from "../component/shows/Seasons"
import Cast from "../component/shows/Cast"
const Show=()=>{
const  {  showId  }=useParams()
const {data:showData,error:showError}=useQuery({
    queryKey:['show',showId],
    queryFn:()=>getShowById(showId),
   refetchOnWindowFocus:false 
})
if(showError){
    return <div> we have an error {showError.message}</div>
}



if(showData){
    return (
        
        <div> 
     
        <div>
        <Link to='/'> Go Back To Home</Link>

           <ShowMainData image={showData.image} 
           name={showData.name} rating={showData.rating}
            summary={showData.summary}
                genres={showData.genres}
            />
        </div>
        <div>
            <h2> Details   </h2>
           <Details status={showData.status}
                  premired={showData.premired}
                  network={showData.network}  />
                  </div>
                  <div>
                    <h2> Seassion</h2>
                   <Seasons   seasons={showData._embedded.seasons}/>
                  </div>

                  <div>
                    <h2> Cast</h2>
                   <Cast cast={showData._embedded.cast}/>
                  </div>
                 </div>
    )
}



return <div> Data is loading </div>
}
export default Show