import React from "react";
import { SearchField } from "./SearchBar.style";
const SearchBar = (props) => {
  const { placeholder, handleChange } = props;
  return (
    <div>
      <SearchField
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      ></SearchField>
    </div>
  );
};

export default SearchBar;
