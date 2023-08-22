import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import PhotoIndex from './components/PhotoIndex/PhotoIndex';
import { loginUser } from './store/sessionsReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import You from './components/You/You';
import SplashPage from './components/Splash/SplashPage';
import UsersSinglePhoto from './components/UsersSinglePhoto/UsersSinglePhoto';
import SinglePhotoShow from './components/SinglePhotoShow/SinglePhotoShow';


function App() {
  const user = useSelector(state => state.session.currentUser)
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();


  // this is toggling between being logged in or logged out
  useEffect(() => {
    (async () => {
      await dispatch(loginUser());
      setLogged(true);
    })();
  }, [dispatch]);


  // if logged in, show the photos and make routes available, otherise just show splash page
  if (!logged) {
    return null;
  }

  return (
    <>
       <BrowserRouter>  
        <NavBar />
           {/* <PhotoIndex photos={photos}/> */}
          <Routes>
            <Route path="/signin" Component={SignInForm}/>
            <Route path="/signup" Component={SignUpForm}/>
            <Route exact path='/photos' Component={PhotoIndex}/>
            <Route exact path='/photos/:id' Component={SinglePhotoShow}/>
            <Route exact path='/user/:user_id' Component={You}/>
            <Route exact path='/user/:userId/photos/:photoId' Component={UsersSinglePhoto}/>
            {/* <Route path="/" Component={SplashPage}/> */}
          
            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
