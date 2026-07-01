import React, { useEffect, useState } from 'react'
import './sidebar.css'
function Sidebar({setName,setPage}) {
  let [course,setCourse]=useState(null)
  const [datas,setDatas]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/roadmaps")
    .then((data)=>data.json())
    .then((data)=>setDatas(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      
        {datas.length>0?(
          <div className='sidebar'>
            <div onClick={(e)=>{setName("");setPage(e.target.innerText)}}>Home</div>
            
            {datas.map((data)=>(
              <div className='roadmap' key={data.id} onClick={()=>setName(data.slug)}>{data.title} </div>
            ))}
            <span className='sidebar-bottom'>
              <div onClick={(e)=>{setName("");setPage(e.target.innerText)}}>Help</div>
              <div onClick={(e)=>{setName("");setPage(e.target.innerText)}}>Settings</div>
              <div onClick={(e)=>{setName("");setPage(e.target.innerText)}}>Profile</div>
            </span>
          </div>

        ):(
          <div>Loading</div>
        )}
    </div>
  )
}

export default Sidebar