import React, { useEffect, useState } from "react";
import "./skillcard.css";
function SkillCard({ skill,setSkill }) {

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
          <div className="resourcebtn">Resource</div>
          <div className="d-flex gap-3">
            <div className="status">
              <select name="progress" className="status" id="progress">
                <option value="pending">pending</option>
                <option value="in progress">In progress</option>
                <option value="completed">completed</option>
              </select>
            </div>
            <div className="closebtn" onClick={()=>setSkill(null)}>X</div>
          </div>
        </div>
        <div className="skilldetail">
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
        {resources.length>0?(
          resources.map((resource)=>(
            resource.skillId==skill.id?(<div className="resource">
              <h4>{resource.title}</h4>
        </div>):(
          <></>
        )
          ))
        ):(
          <div>loading</div>
        )}
      </div>
    </div>
  );
}

export default SkillCard;
