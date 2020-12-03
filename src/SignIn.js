import React from 'react';
import './SignIn.css';

function SignIn(props) {
  return (
    <div className="signIn">
      <button
        className="signIn__button"
        onClick={() => props.signInUser()}
      >Sign In</button>
    </div>
  )
}

export default SignIn
