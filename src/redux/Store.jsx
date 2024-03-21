import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./TodoSlice";
export default configureStore({
    reducer:{
        todos: todoreducer
    },
})