import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
      <div className='NavigationBar'>
          
          <h3>Home</h3>
        <Link to={"/bookmark"}> <h4>Bookmarks</h4></Link> 
    </div>
  )
}

export default NavigationBar