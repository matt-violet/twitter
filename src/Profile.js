import React from 'react';
import './Profile.css';
import Post from './Post';
import moment from 'moment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';

function Profile({ timeline, visitUserProfile }) {
  const user = timeline[0].user;
  const posts = timeline.map((tweet) => {
    return <Post
      className="profile__post"
      tweet={tweet}
      key={tweet.id}
      visitUserProfile={visitUserProfile}
    />
  });

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__arrowContainer">
          <ArrowBackIcon className="profile__backArrow" />
        </div>
        <div className="profile__headerText">
          <h3 className="profile__username">{user.name}</h3>
          <p className="profile__tweetCount">{user.statuses_count} Tweets</p>
        </div>
      </div>
      <img className="profile__backgroundImg" src={user.profile_banner_url} alt=""/>
      <div className="profile__contents">
        <div className="profile__contentsLeftSide">
          <img className="profile__profileImg" src={user.profile_image_url} alt=""/>
          <h3 className="profile__userName">{user.name}</h3>
          <p className="profile__screenName">@{user.screen_name}</p>
          <LocationOnIcon className="profile__locationIcon" />
          <p className="profile__location">{user.location}</p>
          <DateRangeIcon className="profile__calendarIcon" />
          <p className="profile__joinedDate">Joined {moment(user.created_at).format("MMMM YYYY")}</p>
          <div className="profile__follow">
            <span className="profile__followingCount"><strong>{user.friends_count} </strong></span>
            <span className="profile__followingText">Following </span>
            <span className="profile__followersCount"><strong>{user.followers_count} </strong></span>
            <span className="profile__followersText">Followers</span>
          </div>
        </div>
        <button className="profile__editBtn">{user.screen_name === "ayedoemateo" ? "Edit profile" : "Following"}</button>
      </div>
      <div className="profile__links">
        <div className="profile__link profile__link--selected">Tweets</div>
        <div className="profile__link">Tweets & Replies</div>
        <div className="profile__link">Media</div>
        <div className="profile__link">Likes</div>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default Profile;
