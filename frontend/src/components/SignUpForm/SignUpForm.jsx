import React, { useState } from 'react';
import './SignUpForm.css'

function SignUpForm() {
  const [playaName, setPlayaName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePlayaNameChange = (event) => {
    setPlayaName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className='screenBox'>

        <div className='signUpForm'>
            <form className='form' onSubmit={handleSubmit}>
                <img src="https://identity.flickr.com/img/flickr_logo_dots.7670d27a.svg" alt='flickr logo' />
                <h2>Sign Up</h2>
                <div className='formFields'>
                    <div>
                        {/* <label htmlFor="playaName">Playa Name: */}
                             <input type="text" id="playaName" value={playaName} placeholder='Playa Name' onChange={handlePlayaNameChange} required/>
                        {/* </label> */}
                    </div>
                    <div>
                        {/* <label htmlFor="age">Age: */}
                             <input type="number" id="age" value={age} placeholder='Age' onChange={handleAgeChange} required/>
                        {/* </label> */}
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email: */}
                             <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} required/>
                        {/* </label> */}
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password: */}
                            <input type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
                        {/* </label> */}
                    </div>
                    <button className='signUpButton' type="submit">Sign Up</button>
                </div>
             </form>
        </div>
    </div>
  );
}

export default SignUpForm;