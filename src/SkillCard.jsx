import React, { useEffect, useState } from "react";
import "./skillcard.css";
import SkillStatus from "./SkillStatus";
function SkillCard({ skill,setSkill,id,onUpdate,setUpdatedSkill }) {

const[resources,setResources]=useState([])
useEffect(()=>{
  fetch("http://localhost:3000/resources")
  .then((data)=>data.json())
  .then((data)=>setResources(data))
  .catch((err)=>console.log(err))
},[])

  return (
    <div>
      <div className="overlay"></div>
      <div className="skillbox">
        <div className="skillnav">
          <div className="resourcebtn"><p><i className="bi bi-globe-americas-fill"></i>  Resource</p></div>
          <div className="d-flex gap-3">
            <div><SkillStatus roadmapid={id} skill={skill} onUpdate={onUpdate} setUpdatedSkill={setUpdatedSkill}/></div>
            <div className="closebtn" onClick={()=>setSkill(null)}>X</div>
          </div>
        </div>
        <div className="skilldetail">
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
        <div className="resource-box">
          <p className="title"><i className="bi bi-dropbox"></i>  Free Resources</p>
          {resources.length>0?(
          resources.map((resource)=>(
            <div key={resource.id}>
              {
                resource.skillId==skill.id?(<div className="resource">
              <p className="type" style={{backgroundColor:resource.color}}>{resource.type}</p><a href={resource.url}>{resource.title}</a>
        </div>):(
          <></>
        )
              }
            </div>
          ))
        ):(
          <div>loading</div>
        )}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
