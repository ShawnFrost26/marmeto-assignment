import React, { useState } from "react";
import listIcon from "../assets/list-1.png";
import gridIcon from "../assets/menu-1.png";

const SearchBar = ({ handleSearch, handleLayoutChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const input = setSearchTerm(event.target.value);
    handleSearch(input);
  };

  const handleListIconClick = () => {
    handleLayoutChange("list");
  };

  const handleGridIconClick = () => {
    handleLayoutChange("grid");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        position: "absolute",
        top: "56px",
        marginLeft:"30px"
      }}
    >
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        value={searchTerm}
        onChange={handleChange}
        style={{ width: "448px", height: "33px", border: "1px solid black" }}
      />
      <button onClick={handleListIconClick}>
        <img src={listIcon} alt="list-icon" />
      </button>
      <button onClick={handleGridIconClick}>
        <img src={gridIcon} alt="grid-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
