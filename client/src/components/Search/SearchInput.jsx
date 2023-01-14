import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    onSearch(e);
  };

  return (
    
      <input
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => {setInput(e.target.value)
        submitHandler(e.target.value)}}
      />
   
  );
};

export default SearchInput;
