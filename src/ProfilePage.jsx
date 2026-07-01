import React, { useEffect, useState } from "react";

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
    <div>
      {profile? (
        <div>{profile.name}</div>
        
    ):(
    <div>Loading...</div>
)}
    </div>
  );
}

export default ProfilePage;
