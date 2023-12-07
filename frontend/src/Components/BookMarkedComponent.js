import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveFromArray } from '../Utils/Bookmarkslice';

const BookMarkedComponent = ({name, content,Id}) => {
    
    const dispatch = useDispatch();

  return (
      <div className='BookMarkedComponent'>
          
          <div className='Content'>
              
              <p>{content.slice(0,200)}</p>

          </div>

          <div className='AuthorComponent'>
              
            <p>-{name}</p>
          </div>

          <div className='Delete_option'>
              
              <button onClick={()=>dispatch(RemoveFromArray(Id))}>Delete</button>

          </div>

    </div>
  )
}

export default BookMarkedComponent