import React from 'react'

function Searchbar({setText}) {

  return (
    <div>
      <div className='searchbar'><i className="bi bi-search"></i>
        <input type="text" className='search' placeholder='Scarch Roadmap' onChange={(e)=>{setText((e.target.value || "").toLowerCase())}}/>
      </div>
    </div>
  )
}

export default Searchbar