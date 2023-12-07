import React from 'react'

import NavigationBar from "./NavigationBar"
import BookMarkedComponent from './BookMarkedComponent'
import { useSelector } from 'react-redux'
import Empty from './Empty'

const BookMark = () => {

  const bookedmarkedQuoteselector = useSelector((store) => store?.book?.BookMarked_Array);

  if (!bookedmarkedQuoteselector.length) return <Empty/>;


  return (
    <div className='BookMakedPage'>
      <NavigationBar />

      <div className='BookMark_Containner'>

        <div className='BookMark_Scroll_Container'>

         
          {

            bookedmarkedQuoteselector.map((ele) => <BookMarkedComponent key={ele?.Id} {...ele} />)
          }
         
        </div>

      </div>

    </div>
  )
}

export default BookMark