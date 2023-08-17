import React from 'react';
import { Link, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
import PhotoIndex from './components/PhotoIndex/PhotoIndex';


function App() {
  // const user = useSelector(state => state.session.currentUser)
  // const [loaded, setLoaded] = useState(false);
  // const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos");
      setPhotos (await res.json());
    }
    fetchPhotos();
  }, []);

  return (
    <>
       <BrowserRouter>  
        <NavBar />
          <PhotoIndex photos={photos}/>
          <Routes>
            <Route path="/signin" Component={SignInForm}/>
            <Route path="/signup" Component={SignUpForm}/>
            {/* <Route path={`/users/${user.id}`}/> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
