import React from 'react';
import './NavBar.css'
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/sessionsReducer';
// import burnrLogo from '../../assets/logos'

function NavBar() {
  const currentUser = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await dispatch(logoutUser(currentUser.id))
  }

  useEffect (()=> {
    if(!currentUser) {
      navigate(`/`)
    }
  },[currentUser])


  return (
    <nav className="nav-bar">
        <NavLink className='links-on-nav-bar' to='/' exact={true} activeClassName='active'>
              <div className='container-for-right-navbar-links'>
                {/* <img src={burnrLogo} className='logo-navbar' /> */}
                <img src="https://identity.flickr.com/img/flickr_logo_dots.7670d27a.svg" alt="Flickr Logo" />
                <div className='container-for-name'>
                  {/* <span className='site-name-navbar'>Burnr</span> */}
                </div>
              </div>
       </NavLink>  
        {/* <div className="logo">
        </div> */}
        {/* <div className="search-bar">
          <input type="text" placeholder="Photos, people, or groups" />
        </div> */}
      <div className="user-actions">
        { currentUser ?
        <div className='log-out-button'>
          <button type='submit' onClick={handleLogOut }>Log Out</button>
        </div> :
        <div className='sign-in-out-btns'>
          <Link to="/signIn" className="signin-btn">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;
