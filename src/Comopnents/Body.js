import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Login/>,
       },{
          path:"/browse",
  element:<Browse/>
       }])
const Body = () => {
  const dispatch=useDispatch();
   
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email, displayname} = user;
          dispatch(addUser({uid:uid,email:email,displayname:displayname}));
        
        } else {
          dispatch(removeUser)
         
        }
      });
      

     },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

