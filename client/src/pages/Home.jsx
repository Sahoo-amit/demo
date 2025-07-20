import React from 'react'
import { authStore } from './Store'

const Home = () => {
    const removeToken = authStore((state) => state.removeToken);
    const handleLogout =()=>{
        removeToken()
    }
  return (
    <div>
        <div>
            Home
        </div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home