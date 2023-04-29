

import { useState } from 'react';

 export const SearchFrom=({onSearch})=>{

    const [searchOption,setSearchOption]=useState('shows')
    const [searchStr, setSearchStr] = useState('');
    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value)
    }
const onSubmit=(ev)=>{
ev.preventDefault()
const option={
    q:searchStr,searchOption
}

onSearch(option)
}

return (
<form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchInputChange}
        ></input>
        <label>
        Shows
<input type= 'radio' name="search-option " value="shows" checked={searchOption==='shows'} onChange={onRadioChange}/>
        </label>

        <label>
        Actors
<input type= 'radio' name="search-option " value="actors" checked={searchOption==='actors'} onChange={onRadioChange}/>
        </label>



        <button type="submit">Search</button>
      </form>

)
}
//------------------------------------------------//


// const SearchForm = ({ onSearch }) => {
//   const [searchStr, setSearchStr] = useSearchStr();
//   const [searchOption, setSearchOption] = useState('shows');

//   const onSearchInputChange = ev => {
//     setSearchStr(ev.target.value);
//   };

//   const onRadioChange = ev => {
//     setSearchOption(ev.target.value);
//   };

//   const onSubmit = ev => {
//     ev.preventDefault();

//     const options = {
//       q: searchStr,
//       searchOption,
//     };

//     onSearch(options);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <SearchInput
//         type="text"
//         placeholder="Search for something"
//         value={searchStr}
//         onChange={onSearchInputChange}
//       />

//       <RadiosWrapper>
//         <CustomRadio
//           label="Shows"
//           name="search-option"
//           value="shows"
//           checked={searchOption === 'shows'}
//           onChange={onRadioChange}
//         />

//         <CustomRadio
//           label="Actors"
//           name="search-option"
//           value="actors"
//           checked={searchOption === 'actors'}
//           onChange={onRadioChange}
//         />
//       </RadiosWrapper>

//       <SearchButtonWrapper>
//         <button type="submit">Search</button>
//       </SearchButtonWrapper>
//     </form>
//   );
// };

// export default SearchForm;


