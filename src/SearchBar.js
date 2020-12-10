import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({ handleSearchTweets }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    document.getElementById("searchbar").blur()
    handleSearchTweets(query)
  }

  return (
    <div className="searchbar">
      <SearchIcon className="searchbar__searchIcon" />
      <form className="searchbar__form" id="searchbar" onSubmit={handleSubmit}>
        <input
          placeholder="Search Twitter"
          type="text"
          onChange={e => setQuery(e.target.value)}  
        />
      </form>
    </div>
  )
}

export default SearchBar;
