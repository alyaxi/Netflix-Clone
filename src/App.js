import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoginIn, LogOut, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const userState = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log("user auth",userAuth);
        dispatch(LoginIn({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(LogOut())
      }
      return unsubscribe
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!userState ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
            <ProfileScreen/>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
