import React from 'react'
import Searchbar from './Searchbar'
import Profile from './Profile'
import './Navbar.css'
import { useEffect, useState } from 'react'
function Navbar() {

  const[profile,setProfile]=useState(null)
  const[showProfile,setShowProfile]=useState(false)
  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then((data)=>data.json())
    .then((data)=>setProfile(data))
    .catch((err)=>console.log(err))
  },[])
  return (
     <div >
         {profile && <div className='Navbar'>
          <div className='rightNav'>
            <div><img src="src\assets\Textlogo.png" alt="" className='Logo'/></div>
            <Searchbar/>
        </div>
        <div className='leftNav'>
            <div>streak:{profile.streak}<img src='src\assets\fire.png' style={{height:"1rem"}}></img></div>
            <div>XP:{profile.xp}<i className="xp bi bi-lightning-charge-fill"></i></div>
            <div>Theme<i className="dark bi bi-moon-stars-fill"></i><i className="light bi bi-brightness-high-fill"></i></div>
            <Profile key={profile.id} avatar={profile.avatar} show={showProfile} name={profile.name} email={profile.email} xp={profile.xp} level={profile.level} streak={profile.streak} />
        </div>
        </div>}
        
    </div>
  )
}

export default Navbar