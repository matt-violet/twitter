import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentPage: "",
      timeline: []
    }
    this.signInUser = this.signInUser.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  async signInUser() {
    const response = await fetch('/timeline', { mode: 'no-cors' });
    const res = await response.json();
    this.setState({
      isLoggedIn: true,
      currentPage: "Home",
      timeline: res
    })
  }

  updateCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    let { isLoggedIn, currentPage, timeline } = this.state;
    const renderCurrentPage = () => {
      switch(currentPage) {
        case "Home":
          return <Feed timeline={timeline} />;
        case "Profile":
          return <Profile />
      }
    }

    if (isLoggedIn) {
      return (
        <div className="app">
          <Sidebar updateCurrentPage={this.updateCurrentPage} />
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
