import { searchForShows, searchForPeople } from './../api/tvmaze';
import { useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import { SearchFrom } from '../component/SearchFrom';
import ShowGrid from '../component/shows/ShowGrid';
import ActorsGrid from '../component/actor/ActorsGrid';
const Home = () => {
  //
  const [filter,setFilter]=useState(null)
const {data:apiData,error:apidataError}=useQuery({

  queryKey:['search',filter],
  queryFn:()=>filter.searchOption==='shows'?searchForShows(filter.q):searchForPeople(filter.q),
  enabled:!!filter,
refetchOnWindowFocus:false
})




  
  const onSearch = async ({ q, searchOption }) => {
    
setFilter({q,searchOption})

  };

  const renderApiData = () => {
    if (apidataError) {
      return <div>Error occur :{apidataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No result</div>;
    }
    if (apiData) {
      console.log(apiData);
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchFrom onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
