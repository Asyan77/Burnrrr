import React from 'react';
// import Splash from './components/Splash/Splash';
import { Link, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  // const user = useSelector(state => state.session.currentUser)
  // const [loaded, setLoaded] = useState(false);
  // const dispatch = useDispatch();


  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
       <BrowserRouter>  
        <NavBar />
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
