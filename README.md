# Twitter Clone

A personal project by Matt Violet, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

This project uses version 10 of Node, and is started by running `npm start` and `node server` from the root directory in separate terminal tabs.

## Technologies / Libraries Used

* React

* CSS3
  * CSS variables
  * Flexbox
  * BEM naming methodology

* Express

* Node

* Twitter API
  * GET statuses/home_timeline
    * "Returns a collection of the most recent Tweets posted by the authenticating user and the users they follow."
  * GET statuses/user_timeline
    * "Returns a collection of the most recent Tweets posted by the user indicated by the `screen_name` or `user_id` parameters."
  * GET users/show
    * "Returns a variety of information about the user specified by the required `user_id` or `screen_name` parameter. The author's most recent Tweet will be returned inline when possible." 

* React-Twitter-Embed
  * TwitterShareButton
  * TwitterTweetEmbed

* Material UI
  * Avatar, Button, and Icons