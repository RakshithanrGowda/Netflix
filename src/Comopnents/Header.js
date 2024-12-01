import React from 'react'


const Header = () => {
  return (
    <div className="absolute w-screen px-8 z-10 py-2 bg-gradient-to-b from -black flex justify-between">
        <img className="w-44 bg-color-black" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
    <div className='flex p-2'>
      <img className='w-12 h-12 p-4'src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='UserIcon'/>
      <button className='text-color-white'> SignOut</button>
      
    </div>
    </div>
  )
}

export default Header
