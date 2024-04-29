import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext)
  
  return (
    <>
<h2 className='text-center my-5 text-3xl font-bold' >Profile</h2>      
{/* if(user) return <div>Please Login</div> */}

{/* return <div>Welcom {user.username}</div> */}
{ !user ? <div className='mt-2 text-center font-bold text-3xl ' >Please Login</div> : <div className='mt-5 text-center font-bold text-3xl' > Welcome {user.username}</div> }
      


    </>
  )
}

export default Profile
