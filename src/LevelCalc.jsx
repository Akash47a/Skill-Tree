import React, { useState } from 'react'

function LevelCalc({xp}) {
    let level = "God"; 

  if (xp < 200) {
    level = "Newbie";
  } else if (xp >= 200 && xp < 400) {
    level = "Beginner";
  } else if (xp >= 400 && xp < 600) {
    level = "Intermediate"; 
  } else if (xp >= 600 && xp < 800) {
    level = "Advanced";
  }

  return (
    <div>{level}</div>
  )
}

export default LevelCalc