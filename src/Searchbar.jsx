import React from 'react'

function Searchbar() {
  return (
    <div>
      <div className='searchbar'><i className="bi bi-search"></i>
        <input type="text" className='search' placeholder='Scarch Roadmap' />
      </div>
    </div>
  )
}

export default Searchbar