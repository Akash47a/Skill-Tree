import React, { useEffect, useState } from 'react'

function XPcalculation({skill,currentXP}) {

    const [currentxp,updatedxp]=useState(currentXP)
    useEffect(()=>{
        if (!skill) return;

        const changeXP=async()=>{
        try{
            const response=await fetch("http://localhost:3000/users/1")
            const data=await response.json();
            const xp=data.xp;
            
            const addedXP = skill || 0; 
            const updateXP = { ...data, xp: Number(xp) +Number(addedXP) };
            await fetch("http://localhost:3000/users/1",{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updateXP),
            });
            updatedxp(Number(xp) + Number(addedXP));
        }
        catch(error){
            console.error("Error updating XP on server",error);
        }
    }
        changeXP();
    },[skill])

    
    

  return (
    <div>
        {currentxp}
    </div>
  )
}

export default XPcalculation