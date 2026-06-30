import React, { useEffect, useState } from 'react'
import './roadmap.css'
function RoadMap({name,setSkill,datass,setid}) {
  
  const statusColors = {
    "pending": "#c8c8c8",       
    "in progress": "#eec64f",   
    "completed": "#42e47e"      
  };

  return (
    <div>
      {datass.length>0?(
        <div>
          {datass.filter((data) => data.slug == name).map((data)=>(
            <div key={data.id} className='container'>
              <div className='course'>
                <div>
                  <h4>{data.title} RoadMap</h4>
                  <p>{data.description}</p>
                </div>
                <div><span>totalSkills:</span>{data.totalSkills} </div>
              </div>
              {data[data.slug] && data[data.slug].map((skill) => (
                <div key={skill.id} >
                
                <div style={{backgroundColor:(statusColors[skill.state])}}  className='skills' onClick={()=>{setSkill(skill);setid(data.id)}}><p>{skill.title}</p></div>
              </div>))}
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