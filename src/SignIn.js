import React from 'react';
import './SignIn.css';
import TwitterIcon from '@material-ui/icons/Twitter';

function SignIn({ signInUser }) {
  return (
    <div className="signIn">
      <div className="signIn__header">
        <TwitterIcon className="signIn__icon"/>
        <h4 className="signIn__headerText">Twitter Clone</h4>
      </div>
      <button
        className="signIn__button"
        onClick={() => signInUser('ayedoemateo')}
      >Log In</button>
    </div>
  )
}

export default SignIn
