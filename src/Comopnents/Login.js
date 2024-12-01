import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null); 
  const navigate=useNavigate();// For sign-up (optional)

  const toggleSignInForm = () => {
    setSignInform(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // Additional actions after sign-up (e.g., store name if needed)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // Additional actions after sign-in (e.g., redirect, store user info)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="/Backgroundimage.png" alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or Mobile number"
          className="p-2 m-2 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-500"
        />
        {errorMessage && (
          <p className="text-red-600 font-bold text-xl">{errorMessage}</p>
        )}
        <button
          className="p-4 m-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className="py-3 m-1 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? 'New to Netflix? Sign up now'
            : 'Already registered? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
