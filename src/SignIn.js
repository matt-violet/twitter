import React from 'react';
import './SignIn.css';

function SignIn({ signInUser }) {
  return (
    <div className="signIn">
      <button
        className="signIn__button"
        onClick={() => signInUser('ayedoemateo')}
      >Sign In</button>
    </div>
  )
}

export default SignIn
