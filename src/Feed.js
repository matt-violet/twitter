import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ timeline }) {
  const posts = timeline.map((tweet) => {
    return <Post className="feed__post" tweet={tweet} key={tweet.id} />
  })

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <div>
        {posts}
      </div>
    </div>
  )
}

export default Feed;
