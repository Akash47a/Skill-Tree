import React from 'react'
import Searchbar from './Searchbar'
import './Navbar.css'
import { useEffect, useState } from 'react'
import XPcalculation from './XPcalculation'
function Navbar({changedSkillStatus,setPage}) {

  const[profile,setProfile]=useState(null)
  const[showProfile,setShowProfile]=useState(false)
  useEffect(()=>{
    fetch("http://localhost:3000/users/1")
    .then((data)=>data.json())
    .then((data)=>setProfile(data))
    .catch((err)=>console.log(err))
  },[])
  return (
     <div >
         {profile && <div className='Navbar'>
          <div className='rightNav'>
            <div><img src="src\assets\textlogo2.png" alt="" className='Logo'/></div>
            <Searchbar/>
        </div>
        <div className='leftNav'>
            <div>streak:{profile.streak}<img src='src\assets\fire.png' style={{height:"1rem"}}></img></div>
            <div className='d-flex'>XP:<XPcalculation skill={changedSkillStatus} currentXP={profile.xp}/><i className="xp bi bi-lightning-charge-fill"></i></div>
            <div className='theme'><select name="theme" id="theme" className='themes'>
              <option value="light" >light </option>
              <option value="dark">dark </option>
            </select></div>
            <div className='profile' role='button' onClick={()=>{setPage("Profile")}}><img src={profile.avatar} alt=""  className='avatar hw-45' /></div>
          </div>
        </div>}
        
    </div>
  )
}

export default Navbar

