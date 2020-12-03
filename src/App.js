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
      timeline: []
    }
    this.signInUser = this.signInUser.bind(this);
  }

  async signInUser() {
    const response = await fetch('/timeline', { mode: 'no-cors' });
    const res = await response.json();
    this.setState({
      isLoggedIn: true,
      timeline: res
    })
  }

  render() {
    const { isLoggedIn, timeline } = this.state;

    if (isLoggedIn) {
      return (
        <div className="app">
          <Sidebar />
          <Feed timeline={timeline} />
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
