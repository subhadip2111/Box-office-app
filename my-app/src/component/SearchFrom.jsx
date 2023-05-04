import { useState } from 'react';





export const SearchFrom = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
 
  const [searchStr, setSearchStr] = useState('');

 
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
      <label>
        Shows
        <input
          type="radio"
          name="search-option "
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option "
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
