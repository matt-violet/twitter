import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';

function Feed({ homeTimeline, loggedInUserAvatarUrl, generatePosts }) {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox loggedInUserAvatarUrl={loggedInUserAvatarUrl} />
      <div>
        {generatePosts(homeTimeline)}
      </div>
    </div>
  )
}

export default Feed;
