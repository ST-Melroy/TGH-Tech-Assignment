import { createSlice } from "@reduxjs/toolkit";

let array_store = []

localStorage.setItem('bookmarkedData', JSON.stringify(array_store));

const BookMarkSlice = createSlice({

    name: "bookmark",
    
    initialState: {
        
        BookMarked_Array : [],
    },
   

    reducers: {
        
        ADDBookMark: (state, action) => {
    const checkIfAlreadyExist = state.BookMarked_Array.find(
      (ele) => ele?.Id === action.payload[0]?.Id
    );

    if (!checkIfAlreadyExist) {
      return {
        ...state,
          BookMarked_Array: [...state.BookMarked_Array, ...action.payload],
        
      };
    }
        array_store = state.BookMarked_Array;
        return state;
        
       
        },
      RemoveFromArray: (state, action) => {
         
        let removedItem = state.BookMarked_Array.filter((ele) => ele?.Id !== action.payload);
        state.BookMarked_Array = removedItem
       }
    }
})



export default BookMarkSlice.reducer;

export const { ADDBookMark,RemoveFromArray } = BookMarkSlice.actions;