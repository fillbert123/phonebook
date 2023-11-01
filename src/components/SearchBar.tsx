import React, { ChangeEvent, useState } from "react";
import {searchBar} from "../styles/style"
import magnifyingGlass from "../assets/magnifyingglass.svg"
import SearchList from "./SearchList";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // console.log(search);
  }

  return (
    <>
      <div className={searchBar}>
        {/* <button>
          <img src={magnifyingGlass} alt="" />
        </button> */}
        <input 
          type="text" 
          placeholder="Search for first name, last name, or number"
          value={search}
          onChange={handleTextChange}
        />
        <SearchList search={search}/>
      </div>

    </>
  )
}

export default SearchBar;