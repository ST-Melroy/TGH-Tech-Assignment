import React, { useEffect, useState } from 'react'
import bookmarkimage from "../Images/bi_bookmark-plus-fill.svg"
import { useDispatch } from 'react-redux';
import { ADDBookMark } from '../Utils/Bookmarkslice';

const QuotesDisplay = () => {




  const [randomquote, Setrandomquote] = useState([]);

  const [nextquote, Setnextquote] = useState(0)

  const [selectedtag, Setselectedtag] = useState("")
  
  const dispatch = useDispatch()


    
  const fetchQuote = async () => {

    const response = await fetch( selectedtag ? `https://api.quotable.io/quotes?tags=${selectedtag},famous-quotes` :'https://api.quotable.io/quotes/random?limit=7');

    const data = await response.json();


   
    
    if (selectedtag) {
      
      Setrandomquote(data?.results) 
      
    }
    else {

      Setrandomquote(data)
      Setselectedtag('')
      Setnextquote(0)

      

    }
   

    
   
  }

    useEffect(() => {
        
      fetchQuote();
      Setnextquote(0)

    }, [selectedtag])
  
  const handleBookmark = () => {

    dispatch(ADDBookMark([{

      Id: randomquote[nextquote]?._id,
      name: randomquote[nextquote]?.author,
      content: randomquote[nextquote]?.content
    }]))
  }

   

  const handleNextQuote = () => {

 if (nextquote === randomquote.length - 1) {
    Setnextquote(0);
  } else {
    Setnextquote(nextquote + 1);
  }
    
      console.log(randomquote.length)
  
   
  }
 
  if (!randomquote.length) return null;
  

    


    return (
      <>
        <div className='QuoteDisplay' key={randomquote[nextquote]?._id}>
          
          <div className='Message_display'>
              
            <p>{randomquote[nextquote]?.length > 174 ? randomquote[nextquote]?.content.slice(nextquote,195) : randomquote[nextquote]?.content}</p>
          </div>

          <div className='AuthorDisplay'>
              
              <div className='AuthorName'>
                  
                <p> - {randomquote[nextquote]?.author}</p>
              </div>

             <div className='BookMark'>
                  
                <img src={bookmarkimage} alt='' onClick={()=>handleBookmark()}/>
              </div>

          </div>

          
            </div>

        <div className='DropDown_Containner'>

            
            <select name="options" onChange={(e)=>Setselectedtag(e.target.value)}>
                    <option value=""></option>
                    <option value="History">History</option>
                    <option value="technology">Comedy</option>
                    
            </select>

            <button onClick={()=>handleNextQuote()}>Next Quote</button>
      </div>
        
            

            
    </>
  )
}

export default QuotesDisplay