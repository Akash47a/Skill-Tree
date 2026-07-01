import React, { useEffect, useState } from 'react'

function Profile(props) {
    const[showProfile,setShowProfile]=useState(props.show)
    useEffect(()=>{},[showProfile])
  function handleClickEvent(){
      {showProfile?setShowProfile(false):setShowProfile(true)}
  }

  return (
    <div>
      <div className='profile' role='button' onClick={handleClickEvent}><img src={props.avatar} alt=""  className='avatar hw-45' /></div>
      {showProfile && <div className='showprofile'>
        <div className='details' ><img src={props.avatar} alt="" className='avatar hw-60'/>
          <h3>{props.name}</h3>
          <p className='text-center text-md-start'>{props.email}</p>
        </div>
        <div className='list'>
          <div className="acheve"><span>XP earn:</span><h5>{props.xp}<i className="xp bi bi-lightning-charge-fill"></i></h5></div>
          <div className="acheve"><span>current level:</span><h5>{props.level}</h5></div>
          <div className="acheve"><span>current path:</span><h5>{props.xp}</h5></div>
          <div className="acheve"><span>Progress:</span><h5>{props.xp}</h5></div>
          <div className="acheve"><span>streaks:</span><h5>{props.streak}<img src='src\assets\fire.png' style={{height:"1rem"}}></img></h5></div>

        </div>

        </div>} 
    </div>
    
  )
}

export default Profile