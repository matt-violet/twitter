import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(props) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={props.tweet.user.profile_image_url_https} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {props.tweet.user.name + " "} 
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                {props.tweet.user.screen_name}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{props.tweet.text}</p>
          </div>
        </div>
        {/* <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        /> */}
        <div className="post__footer">
          <ChatBubbleOutlineIcon className="post__icon" fontSize="small" />
          <RepeatIcon className="post__icon" fontSize="small" />
          <FavoriteBorderIcon className="post__icon" fontSize="small" />
          <PublishIcon className="post__icon" fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post;
