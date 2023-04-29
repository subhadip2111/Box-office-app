import { searchForShows,searchForPeople } from './../api/tvmaze';
import { useState } from 'react';
import {SearchFrom} from '../component/SearchFrom'
import ShowGrid from '../component/shows/ShowGrid';
import ActorsGrid from '../component/actor/ActorsGrid';
const Home = () => {
  //

  const [apiData, setapiData] = useState(null);
  const [apidataError, setapidataError] = useState(null);


  const onSearch = async ({q,searchOption}) => {
  
/**
 * this ev.preventDefault method tells the user that if the event not working as we expect
 * then do not goes to the default action.
 */

    try {
      setapidataError(null);
      let result;
      if(searchOption ==='shows'){
         result = await searchForShows(q);
        //setapiData(result);
      }else{
        result = await searchForPeople(q);
        //setapiData(result);
      }
      setapiData(result);
     
    } catch (error) {
      setapidataError(error);
    }
  };

  const renderApiData = () => {
    if (apidataError) {
      return <div>Error occur :{apidataError.message}</div>;
    }
    if(apiData?.length===0){
return <div>No result</div>
    }
    if (apiData) {
      console.log(apiData);
   return apiData[0].show
   ?<ShowGrid shows={apiData}/>:
   <ActorsGrid actors={apiData}/>
    }
    return null;
  }
  return (
    <div>
      <SearchFrom onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
