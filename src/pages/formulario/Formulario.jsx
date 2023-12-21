import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  fetchAllUsers,
  updateUser,
  deleteUser,
} from "../../redux/store/users/index";

import { Typography } from "@mui/material";
import FormularioUpdate from "./FormularioUpdate";
import FormularioAdd from "./FormularioAdd";
import FormularioUser from "./FormularioUser";
import Grid from "@mui/joy/Grid";

const Formulario = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);
  const [updatingUserId, setUpdatingUserId] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
    deporte_tipo: "",
    descripcion: "",
    dias: [],
    horarios: [],
    urlimg: "",
    ubicacion: {},
    requisitos: "",
  });

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser({});
  };
  // Funcion para eliminar un usuario
  const handleDeleteUser = (userId) => {
    const userConfirmedDeletion = window.confirm(
      "¿Estás seguro de que quieres eliminar a este usuario?"
    );
    if (userConfirmedDeletion) {
      dispatch(deleteUser(userId));
    } else {
      console.log("Eliminación cancelada por el usuario");
    }
  };

//Cargaa el estado de la lisa para lego ser actualizado
  const handleUpdateUser = (userId) => {
    setUpdatingUserId(userId);
    const { _id, __v, ...userWithoutIdAndV } =
      list.find((user) => user._id === userId) || {};
    setUpdatedUser(userWithoutIdAndV);
    console.log(userId);
  };

  // Realiza la solicitud PATCH para actualizar el usuario en el servidor
  const handleSaveUpdatedUser = () => {
    dispatch(updateUser(updatingUserId, updatedUser));
    setUpdatedUser({});
    console.log(`Usuario con ID ${updatingUserId} actualizado con éxito.`);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        mt="50"
        m={5}
        borderBottom={3}
      >
        Lista de eventos
      </Typography>

      <FormularioUser
        list={list}
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
      />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%" }}
      >
        <Grid xs={6}>
          <Typography variant="h3"m={3}>Registrar deporte universitario</Typography>
          <FormularioAdd
            newUser={newUser}
            setNewUser={setNewUser}
            handleAddUser={handleAddUser}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid xs={6}>
          <Typography variant="h3" m={3}>Actualizar deporte universitario</Typography>
          <FormularioUpdate
            setUpdatedUser={setUpdatedUser}
            updatedUser={updatedUser}
            handleSaveUpdatedUser={handleSaveUpdatedUser}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Formulario;
