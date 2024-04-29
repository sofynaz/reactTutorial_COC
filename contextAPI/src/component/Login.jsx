import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <>
      <div className="container">
        <h2 className='text-center my-5 font-bold text-3xl' >Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='ml-9 text-center font-bold text-3xl'
          type="text" placeholder='username' />
        {''}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' text-center font-bold text-3xl'
          type="text" placeholder='password' />
        <button onClick={handleSubmit} className='font-bold outline-dotted p-3 border-red-500 mx-3 text-3xl' >Submit</button>
      </div>


    </>
  )
}

export default Login
