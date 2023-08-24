import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import PhotoIndex from './components/PhotoIndex/PhotoIndex';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import You from './components/You/You';
import UsersSinglePhoto from './components/UsersSinglePhoto/UsersSinglePhoto';
import SinglePhotoShow from './components/SinglePhotoShow/SinglePhotoShow';


function App() {
  const user = useSelector(state => state.session.currentUser)


  return (
    <>
       <BrowserRouter>  
        <NavBar />
           {/* <PhotoIndex photos={photos}/> */}
                   
            <Route path="/signin" component={SignInForm}/>
            <Route path="/signup" component={SignUpForm}/>
            <Route exact path='/photos' component={PhotoIndex}/>
            <Route exact path='/photos/:id' component={SinglePhotoShow}/>
            <Route exact path='/user/:userId' component={You}/>
            <Route exact path='/user/:userId/photos/:photoId' component={UsersSinglePhoto}/>
            {/* <Route path="/" Component={SplashPage}/> */} 
        </BrowserRouter>
    </>
  );
}

export default App;
