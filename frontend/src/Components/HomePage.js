import React from 'react'
import NavigationBar from './NavigationBar'
import QuotesComponent from './QuotesComponent'

const HomePage = () => {
  return (
      <div className='HomePage'>
          
          <NavigationBar />

          <div className='Containner'>
              
              <QuotesComponent />
              
              

        </div>
    </div>
  )
}

export default HomePage