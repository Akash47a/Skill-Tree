
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import RoadMap from './RoadMap'
import SkillCard from './SkillCard'
import Home from './Home'
import XPcalculation from './XPcalculation'
import Help from './Help'
import ProfilePage from './ProfilePage'
function App() {
  const [name,setName]=useState("")
  const [skill,setSkill]=useState(null)
  const [click,setClick]=useState("none")
  const [id,setid]=useState(null)
  const [roadmapData, setRoadmapData] = useState(null);
  const [changedSkillStatus,setChangedSkillStatus]=useState(null);
  const [page,setPage]=useState("Home")
  const [text,setText]=useState("")

const loadData = async () => {

    const res = await fetch("http://localhost:3000/roadmaps", { 
      cache: "no-store" 
    });
    
    const data = await res.json();
    setRoadmapData(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <div className="app d-flex flex-column">
      <div style={{height:"60px",width:"100vw"}}><Navbar changedSkillStatus={changedSkillStatus} setPage={setPage} setName={setName} setText={setText}/></div>
      <div className='d-flex'>
        <div className='w-15'><Sidebar  setName={setName} setPage={setPage}/></div>
        {name?(
          <div className='w-84' onClick={()=>{setPage("")}}><RoadMap name={name} setSkill={setSkill} setid={setid} datass={roadmapData} /></div>
        ):(
          <div>
            {(page=="Home")&&<div className='w-84'><Home setName={setName} text={text}/></div>}
            {(page=="Help")&&<div className='w-84'><Help/></div>}
            {(page=="Profile")&&<div className='w-84'><ProfilePage/></div>}
          </div>
          
        )}
      </div>
      {skill && <div className='overlay'><SkillCard skill={skill} setSkill={setSkill} id={id} onUpdate={loadData} setUpdatedSkill={setChangedSkillStatus}/></div>}
      
    </div>
  )
}

export default App