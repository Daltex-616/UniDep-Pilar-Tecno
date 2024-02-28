import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({
    name:'deportes',
    initialState:{
        list:[]
    },
    reducers:{
        setUserList: (state,action) =>{
            state.list = action.payload
        }
    }
})

export const {setUserList} = userSlice.actions
export default userSlice.reducer

// traer todos los usuairos
export const fetchAllUsers = () =>(dispatch) =>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_ENDPOINT}`).then((response)=>{
        dispatch(setUserList(response.data))
    })
    .catch((error) => console.log(error + "pipo"))
}

//actualizar usuario
export const updateUser = (userId, updatedUserData) => (dispatch) => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_ENDPOINT}/${userId}`, updatedUserData)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error));
  };
//agregar un usuairo 

export const addUser = (user) => (dispatch) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_ENDPOINT}`, user)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error),);
  };

  //eliminar usuarios

  export const deleteUser = (userId) => (dispatch) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_ENDPOINT}/${userId}`)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error));
  };