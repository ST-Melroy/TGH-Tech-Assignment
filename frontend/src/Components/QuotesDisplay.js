import React from 'react'
import bookmarkimage from "../Images/bi_bookmark-plus-fill.svg"

const QuotesDisplay = () => {
    return (
      <>
        <div className='QuoteDisplay'>
          
          <div className='Message_display'>
              
            <p>The human spirit must prevail over technology</p>
          </div>

          <div className='AuthorDisplay'>
              
              <div className='AuthorName'>
                  
                <p> - Albert Einstein</p>
              </div>

              <div className='BookMark'>
                  
                <img src={bookmarkimage} alt=''/>
              </div>

          </div>

          
            </div>

            <div className='DropDown_Containner'>

                
                   <select name="options">
                        <option value="History">History</option>
                        <option value="Comedy">Comedy</option>
                       
                </select>

                <button>Next Quote</button>
            </div>
            

            
    </>
  )
}

export default QuotesDisplay