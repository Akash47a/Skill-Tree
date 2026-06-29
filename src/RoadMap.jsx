import React, { useEffect, useState } from 'react'
import './roadmap.css'
function RoadMap({name}) {
  let [course,setCourse]=useState([])
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
        <div className='roadma'>
          {datas.filter((data) => data.slug == name).map((data)=>(
            <div key={data.id} className='container'>
              <div className='course'><p>{data.title} RoadMap</p></div>
              {data[data.slug] && data[data.slug].map((skill) => (
                <div key={skill.id}  className='skills'><p>{skill.title}</p></div>
              ))}
            </div>
          ))}
        </div>
      ):(
        <div>Loading</div>
      )}
    </div>
  )
}

export default RoadMap