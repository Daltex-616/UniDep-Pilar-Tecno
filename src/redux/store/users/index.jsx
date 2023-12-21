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
    axios.get("http://localhost:4000/deportes").then((response)=>{
        dispatch(setUserList(response.data))
    })
    .catch((error) => console.log(error + "pipo"))
}

//actualizar usuario
export const updateUser = (userId, updatedUserData) => (dispatch) => {
    axios.put(`http://localhost:4000/deportes/${userId}`, updatedUserData)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error));
  };
//agregar un usuairo 

export const addUser = (user) => (dispatch) => {
    axios.post("http://localhost:4000/deportes", user)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error),);
  };

  //eliminar usuarios

  export const deleteUser = (userId) => (dispatch) => {
    axios.delete(`http://localhost:4000/deportes/${userId}`)
      .then((response) => {
        dispatch(fetchAllUsers());
      })
      .catch((error) => console.error(error));
  };