import React, { ChangeEvent, useState } from "react";
import {searchBar, searchInput} from "../styles/style"
import magnifyingGlass from "../assets/magnifyingglass.svg"
import xmark from "../assets/xmark.circle.fill.svg"
import SearchList from "./SearchList";

interface SearchBarProps {
  showProfile: (data: number) => void;
}

const SearchBar = ({showProfile}: SearchBarProps) => {
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
            className={searchInput}
            type="text" 
            placeholder="First name, last name, or phone number"
            value={search}
            onChange={handleTextChange}
          />
          <img src={xmark} alt="" onClick={emptySearch} />
        </div>
        <SearchList search={search} showProfile={showProfile} />
      </div>
    </>
  )
}

export default SearchBar;