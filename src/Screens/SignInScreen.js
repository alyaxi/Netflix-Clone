import React, { useRef } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import "./SignInScreen.css";
function SignInScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((authUser) => {
      const user = authUser.user;
      console.log(user);
    }).catch((error) => {
      alert(error.message)
    })
  }
  const singIN = (e) => {
    e.preventDefault()
    
signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userSignIn) => {
    // Signed in 
    const user = userSignIn.user;
    console.log(user);
    return user
    // ...
  })
  .catch((error) => {
    alert(error.message)
  });
  }
  return (
    <div className="singInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email or phone number" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={singIN}> Sign In</button>

        <h4>
          <span className="singupScreen_gray">New to Netflix?  </span>  
          <span onClick={register} className="signUpScreen_Link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
