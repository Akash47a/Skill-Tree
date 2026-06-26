
import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import RoadMap from './RoadMap'
function App() {
  const [name,setName]=useState("")
  return (
    <div className="d-flex vh-100 flex-column" >
      <div style={{height:"60px",width:"100vw"}}><Navbar /></div>
      <div className='d-flex'>
        <div className='w-15'><Sidebar  setName={setName}/></div>
        <div className='w-84' ><RoadMap name={name}/></div>
      </div>
    </div>
  )
}

export default App