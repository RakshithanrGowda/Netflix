import React from 'react'
import Header from './Header'
import { useState } from 'react';


const Login = () => {
  const [isSignInForm, setSignInform]= useState (true);
  const toggleSignInForm=()=>{
  setSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='/Backgroundimage.png' alt='background'/>
      
      </div>
      <form
       className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 
        className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In":"Sign Up"}
           </h1>
          {!isSignInForm &&( <input type='text' placeholder='Full Name' 
        className='p-2 m-2 w-full bg-gray-500'/>)}
        <input type='text' placeholder='Email or Mobile number ' 
        className='p-2 m-2 w-full bg-gray-500' />
        <input type='text' placeholder='password' 
        className='p-2 m-2 w-full bg-gray-500'/>
      
        <button className='p-4 m-2 bg-red-700 w-full rounded-lg'>
        {isSignInForm ? "Sign In":"Sign Up"}</button> 
      <p className='py-3 m-1 cursor-pointer' onClick={toggleSignInForm}> 
      {isSignInForm ? "New to Netflix? sign up now":" Already registerd ! SignIn now"} </p>
      </form>
    </div>
  )
}

export default Login


