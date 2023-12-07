import React from 'react'
import NavigationBar from './NavigationBar'

const Empty = () => {
  return (
    <div className='BookMakedPage'>
      <NavigationBar />

      <div className='BookMark_Containner'>

              <div className='BookMark_Scroll_Container'>
                  
                  <h1>No BookMarked Quote!!</h1>
                  
              </div>

        </div>
          
    </div>

  )
}

export default Empty