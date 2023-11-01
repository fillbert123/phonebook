import React, { ChangeEvent, useState } from "react";
import {searchBar} from "../styles/style"
import magnifyingGlass from "../assets/magnifyingglass.svg"
import xmark from "../assets/xmark.circle.fill.svg"
import SearchList from "./SearchList";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const emptySearch = () => {
    setSearch('');
  }

  return (
    <>
      <div className={searchBar}>
        <div>
          <img src={magnifyingGlass} alt="" />
          <input 
            type="text" 
            placeholder="First name, last name, or phone number"
            value={search}
            onChange={handleTextChange}
          />
          <img src={xmark} alt="" onClick={emptySearch} />
        </div>
        <SearchList search={search}/>
      </div>
    </>
  )
}

export default SearchBar;