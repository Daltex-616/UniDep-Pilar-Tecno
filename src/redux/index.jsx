import {configureStore} from "@reduxjs/toolkit"
//reducer
import users from "./store/users"

 export default configureStore({
    reducer:{
        users
    }
})