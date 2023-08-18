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
import SinglePhotoShow from './components/SinglePhotoShow/SinglePhotoShow';
import You from './components/You/You';


function App() {
  const user = useSelector(state => state.session.currentUser)
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();
  // const [photos, setPhotos] = useState([]);

// this is grabbing all 30 photos
  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const res = await fetch("/api/photos");
  //     setPhotos(await res.json());
  //   }
  //   fetchPhotos();
  // }, []);

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
            <Route path='/photos' exact={true} Component={PhotoIndex}/>
            {/* <Route path='/photos/users/:user_id' exact={true} Component={You}/> */}
            {/* <Route path='/photos/:photo_id' exact={true} Component={SinglePhotoShow}/> */}
            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
