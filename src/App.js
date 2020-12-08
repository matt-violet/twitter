import React, { Component } from 'react';
import { fetchHomeTimeline, fetchUserTimeline, fetchUser } from './utils/utils.js';
import './App.css';
import SignIn from './SignIn';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Profile from './Profile';
import Widgets from './Widgets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentPage: "",
      loggedInUser: {},
      homeTimeline: [],
      loggedInUserTweets: [],
      featuredProfileTweets: []
    }
    this.signInUser = this.signInUser.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.visitUserProfile = this.visitUserProfile.bind(this);
  }

  async signInUser(user) {
    const homeTimeline = await fetchHomeTimeline();
    const loggedInUser = await fetchUser(user);

    this.setState({
      isLoggedIn: true,
      currentPage: "Home",
      homeTimeline: homeTimeline,
      loggedInUser: loggedInUser
    })
  }

  async visitUserProfile(username) {
    const { loggedInUserTweets } = this.state;
    const featuredProfileTweets = await fetchUserTimeline(username)

    if (username === 'ayedoemateo') {
      if (loggedInUserTweets.length) {
        this.setState({
          currentPage: "Profile",
          featuredProfileTweets
        })
        return;
      } else {
        this.setState({
          currentPage: "Profile",
          loggedInUserTweets: featuredProfileTweets,
          featuredProfileTweets
        })
      }
      return;
    }
    this.setState({
      currentPage: "Profile",
      featuredProfileTweets
    })
  }

  updateCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    const { isLoggedIn, currentPage, homeTimeline, loggedInUser, featuredProfileTweets } = this.state;
    const renderCurrentPage = () => {
      switch(currentPage) {
        case "Home":
        return <Feed
          loggedInUserAvatarUrl={loggedInUser.profile_image_url}
          homeTimeline={homeTimeline}
          visitUserProfile={this.visitUserProfile}
        />;
        case "Profile":
          return <Profile
            timeline={featuredProfileTweets}
            visitUserProfile={this.visitUserProfile}
          />
        default:
          return <Feed
            loggedInUserAvatarUrl={loggedInUser.profile_image_url}
            homeTimeline={homeTimeline}
            visitUserProfile={this.visitUserProfile}
          />;
      }
    }

    if (isLoggedIn) {
      return (
        <div className="app">
          <Sidebar updateCurrentPage={this.updateCurrentPage} visitUserProfile={this.visitUserProfile} />
          <div className="currentPage">
            {renderCurrentPage(currentPage)}
          </div>
          <Widgets />
        </div>
      )
    }
    return (
      <SignIn signInUser={this.signInUser} />
    )
  }
}

export default App;
