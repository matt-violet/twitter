import React, { Component } from 'react';
import { fetchHomeTimeline, fetchUserTimeline, fetchUser, searchTweets } from './utils/utils.js';
import './App.css';
import SignIn from './SignIn';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Profile from './Profile';
import Widgets from './Widgets';
import Explore from './Explore';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentPage: "",
      loggedInUser: {},
      homeTimeline: [],
      loggedInUserTweets: [],
      featuredProfileTweets: [],
      queryResults: {},
      submittedQuery: ""
    }
    this.signInUser = this.signInUser.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.visitUserProfile = this.visitUserProfile.bind(this);
    this.handleSearchTweets = this.handleSearchTweets.bind(this);
    this.generatePosts = this.generatePosts.bind(this);
  }

  async signInUser(user) {
    const homeTimeline = await fetchHomeTimeline();
    const loggedInUser = await fetchUser(user);

    this.setState({
      isLoggedIn: true,
      currentPage: "Home",
      homeTimeline,
      loggedInUser
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

  generatePosts(tweets) {
    const posts = tweets.map((tweet) => {
      return <Post
        className="feed__post"
        tweet={tweet}
        key={tweet.id}
        visitUserProfile={this.visitUserProfile}
      />
    })
    return posts;
  }

  updateCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  async handleSearchTweets(query) {
    const queryResults = await searchTweets(query);

    this.setState({
      currentPage: "Explore",
      queryResults,
      submittedQuery: query
    })
  }

  render() {
    const { isLoggedIn, currentPage, homeTimeline, loggedInUser, featuredProfileTweets, queryResults } = this.state;
    const renderCurrentPage = () => {
      switch(currentPage) {
        case "Home":
          return <Feed
            loggedInUserAvatarUrl={loggedInUser.profile_image_url}
            homeTimeline={homeTimeline}
            generatePosts={this.generatePosts}
          />;
        case "Explore":
          return <Explore
            queryResults={queryResults}
            generatePosts={this.generatePosts}
            handleSearchTweets={this.handleSearchTweets}
          />;
        case "Profile":
          return <Profile
            timeline={featuredProfileTweets}
            generatePosts={this.generatePosts}
          />;
        default:
          return null
      }
    }

    if (isLoggedIn) {
      return (
        <div className="app">
          <Sidebar updateCurrentPage={this.updateCurrentPage} visitUserProfile={this.visitUserProfile} currentPage={currentPage} />
          <div className="currentPage">
            {renderCurrentPage(currentPage)}
          </div>
          <Widgets
            handleSearchTweets={this.handleSearchTweets}
            currentPage={currentPage}
          />
        </div>
      )
    }
    return (
      <SignIn signInUser={this.signInUser} />
    )
  }
}

export default App;
