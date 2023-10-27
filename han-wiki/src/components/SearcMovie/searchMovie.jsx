/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import axios from "axios";
import { useState } from "react";
import ENDPOINTS from "../../constant/endpoints";

const StyledSearch = styled.div`
  margin: 1rem 0 1rem 0;
  position: relative;
  input {
    width: 50%;
    height: 50px;
    border: none;
    padding: 0 0 0 1rem;
    outline: none;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  input:focus {
    border: 2px solid #7800ff;
  }

  button {
    border: none;
    width: 50px;
    height: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #00abf5;
    cursor: pointer;
  }
  button:hover {
    background-color: #0073c7;
  }
`;
export default function SearchMovie({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    const query = encodeURIComponent(searchValue);

    try {
      const response = await axios.get(ENDPOINTS.SEARCH_MOVIE(query));
      const movies = response.data.results;
      onSearch(movies);
    } catch (error) {
      console.error("Error  search movies:", error);
    }
  };

  return (
    <StyledSearch>
      <div className="inputan">
        <input type="text" id="search" name="search" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} placeholder="Search Movies..." />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} beatFade style={{ color: "#000000" }} />
        </button>
      </div>
    </StyledSearch>
  );
}
