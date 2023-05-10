import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './customRadio';


//import CustomRadio from


export const SearchFrom = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
 
  const [searchStr, setSearchStr] =useSearchStr();

 
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const option = {
      q: searchStr,
      searchOption,
    };

    onSearch(option);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={searchStr}
        onChange={onSearchInputChange}
      ></input>
      <CustomRadio
      label='Shows'
         name="search-option "
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
      />
     

   
     <CustomRadio
       label="Actors"
          name="search-option "
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
  

      <button type="submit">Search</button>
    </form>
  );
};
