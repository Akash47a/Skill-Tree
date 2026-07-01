import React, { useEffect, useState } from "react";
import "./profile.css"
import LevelCalc from "./LevelCalc";
function ProfilePage() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const Profile = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/1");
        const data = await response.json();
        setProfile(data);
        
      } catch {
        console.error("error while fetching");
      }
    };
    Profile();
    
  }, []);
 
  return (
    <div className="back-container">
      {profile? (
        <div className="profile-container">
          <img src={profile.avatar} alt="" className="rounded-circle wpx-150 "/>
          <div className="details-pp"><p>Name</p><input type="text" className="name-input input" value={profile.name}/></div>
          <div className="details-pp"><p>Email</p><input type="email" className="email-input input" value={profile.email}/></div>
          <div className="Current-Status">
            <p>Your Current Status</p>
            <div className="d-flex gap-2 h-75">
              <div className="status-box"><img src="src\assets\fire.png" alt="" className="h-60 mx-2"/><div className=""><div className="fs-5 fw-semibold ">{profile.streak}</div><div className="text-secondary">Streak</div></div></div>
              <div className="status-box"><img src="src\assets\flash.png" alt="" className="h-60 mx-2" /><div className=""><div className="fs-5 fw-semibold">{profile.xp}</div><div className="text-secondary">TotalXP</div ></div></div>
            </div>
            <div className="level-box"><img src="src\assets\level.png" alt="" className="h-60 mx-2" /><div className=""><div className="fs-5 fw-semibold"><LevelCalc xp={profile.xp}/></div><div className="text-secondary">Level</div ></div></div>
            <div></div>
          </div>
          <div className="progress">

          </div>
        </div>   
      ):(
      <div>Loading...</div>
      )}
    </div>
  );
}

export default ProfilePage;
