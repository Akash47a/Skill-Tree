import React, { useEffect, useState } from "react";

function SkillStatus({ roadmapid, skill,onUpdate }) { 
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState(skill?.state || null); 

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    try {
      const response = await fetch(`http://localhost:3000/roadmaps/${roadmapid}`);
      const roadmap = await response.json();

      const updatedskills = roadmap[roadmap.slug].map((s) => 
        s.id === skill.id ? { ...s, state: newStatus } : s
      );

      const updatedRoadmap = { ...roadmap, [roadmap.slug]: updatedskills };

      await fetch(`http://localhost:3000/roadmaps/${roadmapid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRoadmap),
      });
      if(onUpdate){
        onUpdate();
      }
    } catch (error) {
      console.error("Error updating status on server:", error);
    }
    
  }

  return (
    <div className="status">
      <select name="progress" className="status" id="progress" value={status} onChange={handleChange}>
        <option value="pending">⚫ pending</option>
        <option value="in progress">🟡 In progress</option>
        <option value="completed">🟢 completed</option>
      </select>
    </div>
  );
}

export default SkillStatus;