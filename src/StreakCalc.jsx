import React from 'react'
import { useEffect } from 'react';
function StreakCalc({userd}) {

      
      
      const handleChange = async () => {
        try {
          const response = await fetch(`http://localhost:3000/users/1`);
          const userinfo = await response.json();

            let user={ 
                currentStreak:userinfo.streak || 0,
                lastActiveAt:userinfo.lastActiveAt}

          UpdateStreak(user)
          const updatedStreak = { ...userinfo, streak:user.currentStreak,lastActiveAt:user.lastActiveAt };
    
          await fetch(`http://localhost:3000/users/1`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedStreak),
          });
        } catch (error) {
          console.error("Error updating status on server:", error);
        }
        
      }
      useEffect(() => {
        handleChange();
    }, []);


    function setMidNight(date){
        const d=new Date(date)
        d.setHours(0,0,0,0)
        return d;

    }
    function UpdateStreak(user){
        const today=setMidNight(new Date())
        if(!user.lastActiveAt){
            user.currentStreak=1;
            const d=new Date()
            user.lastActiveAt=today.toISOString()
            return user;
        }
        const lastActive=setMidNight(user.lastActiveAt);
        const TimeDifference=today-lastActive;
        const dayDifference=Math.floor(TimeDifference/(24*60*60*1000))
        
        if(dayDifference==0){
            return user
        }
        if(dayDifference==1){
            user.currentStreak+=1;
            user.lastActiveAt=today.toISOString()
            return user;
        }
        else{
            user.currentStreak=1;
            user.lastActiveAt=today.toISOString()   
            return user;
        }
    }

  return (
    <div>
        {userd.streak}
    </div>
  )
}

export default StreakCalc