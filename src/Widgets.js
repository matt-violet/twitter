import React from 'react';
import './Widgets.css';
import { TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchBar from './SearchBar.js';

function Widgets({ currentPage, handleSearchTweets }) {
  const featuredTweetId = "876301046359875584";

  return (
    <div className="widgets">
      <div className="widgets__input">
        {currentPage === "Explore" ? "" : <SearchBar handleSearchTweets={handleSearchTweets} />}
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={featuredTweetId} />
        <TwitterShareButton
           url={"https://facebook.com/cleverprogrammer"}
           options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  )
}

export default Widgets;
