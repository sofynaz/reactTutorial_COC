import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
  return (
    <>
    <UserContextProvider>
    <h1 className='bg-red-900 text-white text-3xl text-center py-8' >Context API</h1>
    <Login/>
    <Profile/>

    </UserContextProvider>

    </>
      
 
  )
}

export default App
