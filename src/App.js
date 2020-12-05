import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentPage: "",
      homeTimeline: [],
      profileTimeline: [],
      userTimeline: []
    }
    this.signInUser = this.signInUser.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.visitUserTimeline = this.visitUserTimeline.bind(this);
  }

  async signInUser() {
    const response = await fetch('/timeline');
    const res = await response.json();
    this.setState({
      isLoggedIn: true,
      currentPage: "Home",
      featuredProfile: "ayedoemateo",
      homeTimeline: res
    })
  }

  async visitUserTimeline(user) {
    const response = await fetch(`/timeline/${user}`);
    const res = await response.json();
    this.setState({
      currentPage: "Profile",
      featuredProfile: user,
      userTimeline: res
    })
  }

  updateCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    let { isLoggedIn, currentPage, homeTimeline, userTimeline } = this.state;
    const renderCurrentPage = () => {
      switch(currentPage) {
        case "Home":
          return <Feed timeline={homeTimeline} visitUserTimeline={this.visitUserTimeline} />;
        case "Profile":
          return <Feed timeline={userTimeline} visitUserTimeline={this.visitUserTimeline} />
        default:
          return <Feed timeline={homeTimeline} visitUserTimeline={this.visitUserTimeline} />;
      }
    }

    if (isLoggedIn) {
      return (
        <div className="app">
          <Sidebar updateCurrentPage={this.updateCurrentPage} visitUserTimeline={this.visitUserTimeline} />
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
