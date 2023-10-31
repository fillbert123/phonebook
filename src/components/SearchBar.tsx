import React from "react";
import {searchBar} from "../styles/style"

const SearchBar: React.FC = () => {
  return (
    <div className={searchBar}>
      {/* <select name="" id="">
        <option value="">First name</option>
        <option value="">Last name</option>
        <option value="">Phone number</option>
      </select> */}
      <input type="text" name="" id="" placeholder="Search for name or number"/>
      <button>Search</button>
    </div>
  )
}

export default SearchBar;