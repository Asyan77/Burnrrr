import React, { useState } from 'react';
import './SignInForm.css'
import { csrfFetch } from '../../utils/authUtils';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission, such as sending data to a server
    csrfFetch("http://localhost:5000/api/session", {
      method: "POST",
      body: JSON.stringify({
      email: email,
      password: password
      })
    })
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='outerFormBox'>

      <div className="signInBox">
        <img src="https://identity.flickr.com/img/flickr_logo_dots.7670d27a.svg" alt='flickr logo' />

        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input type="text" id="email" value={email} placeholder='Email' onChange={handleEmailChange} required/>
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required/>
          </div>
          <button className='signInButton' type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;