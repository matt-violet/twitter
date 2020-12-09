import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ homeTimeline, loggedInUserAvatarUrl, visitUserProfile }) {
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  // const [books, setBooks] = useState([])
  // const [hasMore, setHasMore] = useState(false)
  // 

  const posts = homeTimeline.map((tweet) => {
    return <Post
      className="feed__post"
      tweet={tweet}
      key={tweet.id}
      visitUserProfile={visitUserProfile}
    />
  })

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox loggedInUserAvatarUrl={loggedInUserAvatarUrl} />
      <div>
        {posts}
      </div>
    </div>
  )
}

export default Feed;
