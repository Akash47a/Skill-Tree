import React, { useEffect, useState } from 'react'
import './sidebar.css'
function Sidebar({setName}) {
  let [course,setCourse]=useState(null)
  const [datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/roadmaps")
    .then((data)=>data.json())
    .then((data)=>setDatas(data))
    .catch((err)=>console.log(err))
  },[])
  //setName(course);
  return (
    <div>
        {datas.length>0?(
          <div className='sidebar'>
            <div onClick={()=>setName("")}>Home</div>
            
            {datas.map((data)=>(
              <div className='roadmap' key={data.id} onClick={()=>setName(data.slug)}>{data.title} </div>
            ))}
            <span className='sidebar-bottom'>
              <div>Help</div>
              <div>Settings</div>
              <div>Profile</div>
            </span>
          </div>

        ):(
          <div>Loading</div>
        )}
    </div>
  )
}

export default Sidebar