import React from 'react';
import './Explore.css';
import SearchBar from './SearchBar';

function Explore({ queryResults, generatePosts, handleSearchTweets }) {
  return (
    <div className="explore">
      <div className="explore__header">
        <div className="explore__searchbar">
          <SearchBar handleSearchTweets={handleSearchTweets} />
        </div>
        <div className="explore__links">
          <div className="explore__link explore__link--selected">Top</div>
          <div className="explore__link">Latest</div>
          <div className="explore__link">People</div>
          <div className="explore__link">Photos</div>
          <div className="explore__link">Video</div>
        </div>
      </div>
      <div className="explore__posts">
        {
          Object.keys(queryResults).length ? generatePosts(queryResults.statuses) : ""
        }
      </div>
    </div>
  )
}

export default Explore;
