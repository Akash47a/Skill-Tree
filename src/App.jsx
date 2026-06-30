
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import RoadMap from './RoadMap'
import SkillCard from './SkillCard'
import Home from './Home'
function App() {
  const [name,setName]=useState("")
  const [skill,setSkill]=useState(null)
  const [click,setClick]=useState("none")
  const [id,setid]=useState(null)
  
  return (
    <div className="app d-flex flex-column">
      <div style={{height:"60px",width:"100vw"}}><Navbar /></div>
      <div className='d-flex'>
        <div className='w-15'><Sidebar  setName={setName}/></div>
        {name?(
          <div className='w-84' ><RoadMap name={name} setSkill={setSkill} setid={setid}/></div>
        ):(
          <div className='w-84'><Home setName={setName}/></div>
        )}
      </div>
      {skill && <div className='overlay'><SkillCard skill={skill} setSkill={setSkill} id={id}/></div>}
    </div>
  )
}

export default App