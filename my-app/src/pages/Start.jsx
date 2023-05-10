import { useQuery } from "@tanstack/react-query";
import { useStartShows } from "../lib/useStartedShows";
import { getShowsById } from "../api/tvmaze";
import ShowGrid from "../component/shows/ShowGrid";

const Started = () => {
  const [startShowIds ] = useStartShows()

  const {data:startShow ,error:startShowerror}=useQuery({

    queryKey:['starred',startShowIds],
    queryFn: ()=> getShowsById(startShowIds).then(result=>
     result.map(show => ({ show }) )),
      refetchOnWindowFocus:false
  })





  if(startShow?.length===0){
    return <div>No Shows Were stared</div>
   }
 if(startShow?.length>0){
  return <ShowGrid  shows={startShow}/>
 }
 if(startShowerror){
  return <div>Error occur:{startShowerror.message}</div>
 }
 
   //--


  
   return <div>Shows are loading </div>;


  };
export default Started;
