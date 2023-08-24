import './SignUpForm.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { loginUser, createUser } from '../../store/sessionsReducer';


function SignUpForm() {
  const dispatch = useDispatch();
  const [playaName, setPlayaName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = [playaName, email, password]
  const user = useSelector(state => state.session.currentUser);
  // const navigate = useNavigate();
  let burnrLogoBike = "assets/logos/burnrLogoBike.png"

  const handlePlayaNameChange = (event) => {
    setPlayaName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const [username, age, email, password] = userData
    const newUser = { username: playaName, email: email, password: password }
    dispatch(createUser(newUser))
  }

  const demoUser = async (e) => {
    e.preventDefault()

    const demoEmail = 'zach@mail.com'
    const demoPassword = 'zachword'

    return await dispatch(loginUser({email: demoEmail, password: demoPassword}))
  }
  useEffect (()=> {
    if(user) {
      // navigate('/photos')
      // navigate(`/users/${user.id}`)
    }
  },[user])

  return (
    <div className='outer-form-box'>
        <div className='sign-up-form'>
            <form onSubmit={handleSubmit}>
                <img src={burnrLogoBike} className='form-logo' alt='burnr-logo'/>
                <h2>Sign Up for Burnr</h2>
                <div className='form-fields'>
                  <input className='playaname-field' type="text" id="playaName" value={playaName} placeholder='Playa Name' onChange={handlePlayaNameChange} required={true}/>
                  <input className='email-field' type="email" value={email} placeholder='Email' onChange={handleEmailChange} required={true}/>
                  <input className='password-field' type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required ={true} />
                </div>
                <div className='btns-bottom-of-form'>
                  <button className='sign-up-btn' type='submit' onClick={event => demoUser(event)}>Sign Up</button>
                  <br></br>
                  <button className='demo-sign-up-btn' onClick={event => demoUser(event)}>Demo User</button>                     
                  <div className='already-a-member-sign-up'> Already a Burnr member? <Link to='/login' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Log in here.</Link></div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default SignUpForm;