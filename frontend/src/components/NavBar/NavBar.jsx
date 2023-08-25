import React from 'react';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/sessionsReducer';
import UserIconButton from '../UserIconButton/UserIconButton';

let burnrLogo = "assets/logos/burnrLogo.png"
let uploadIcon = "assets/logos/upload-icon-64.png"

function NavBar() {
  const currentUser = useSelector(state => state.session.currentUser);
  const dispatch = useDispatch();
  let loggedInButtons;

  const handleLogOut = async () => {
    await dispatch(logoutUser(currentUser.id))
  }

  // useEffect (()=> {
  //   if(!currentUser) {
  //     // navigate(`/`)
  //   }
  // },[currentUser])

  if (currentUser) {
    loggedInButtons = (
      <>
        <div className='profile-button-div'>
          <UserIconButton user={currentUser} className='ProfileButton' />
        </div>

      </>
    )
  }

  return (
    <nav className="nav-bar">
      <div className='nav-bar-left'>
        <NavLink className='links-on-nav-bar' to='/' exact={true} activeClassName='active'>
          <div className='container-for-right-navbar-links'>
            <img src={burnrLogo} className='logo-navbar' alt='' />
          </div>
       </NavLink>  
      </div>
      <div className="nav-bar-right">
        { currentUser ?
        <>
          <div className='logged-in-nav-btns'>
            <input className="search-bar" type="text" placeholder="Photos, people, or groups" disabled/>
            <div className='explore-btn'>
             <NavLink to='/photos' className='left-side-links-navbar'>Explore</NavLink>
            </div> 

            <div className='you-btn'> 
              <NavLink to={`/user/${currentUser.id}`} className='left-side-links-navbar'>You</NavLink>
            </div> 

            <NavLink className='links-on-nav-bar' to='/upload' exact={true} activeClassName='active'>
              <div className='upload-icon-navbar'>
               <img src={uploadIcon} className='upload-icon' alt='' />
              </div>
            </NavLink>

            <div className='log-out-btn'>
              <button className='log-out-btn' type='submit' onClick={handleLogOut }>Log Out</button> 
            </div>
            {/* {loggedInButtons} */}

          </div>
        </>
         :
        <div className='logged-out-nav-btns'>
          <input className="search-bar-logged-out" type="text" placeholder="Photos, people, or groups" disabled/>
          <div className='sign-in-out-btns'> 
            <Link to="/signIn" className="signin-btn">Log In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;
