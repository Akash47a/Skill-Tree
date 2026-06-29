import React, { useEffect, useState } from 'react'
import './roadmap.css'
function RoadMap({name,setSkill}) {
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
        <div>
          {datas.filter((data) => data.slug == name).map((data)=>(
            <div key={data.id} className='container'>
              <div className='course'>
                <div>
                  <h4>{data.title} RoadMap</h4>
                  <p>{data.description}</p>
                </div>
                <div><span>totalSkills:</span>{data.totalSkills} </div>
              </div>
              {data[data.slug] && data[data.slug].map((skill) => (
                <div key={skill.id}  className='skills' onClick={()=>setSkill(skill)}><p>{skill.title}</p></div>
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