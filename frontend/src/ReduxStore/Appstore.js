import { configureStore } from "@reduxjs/toolkit";
import Bookmarkslice from "../Utils/Bookmarkslice";



export const appstore = configureStore({
    reducer: {
        book:Bookmarkslice
    }
})