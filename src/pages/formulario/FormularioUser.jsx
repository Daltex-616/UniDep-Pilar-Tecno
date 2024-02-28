import React from "react";
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";

const FormularioUser = ({list,handleDeleteUser,handleUpdateUser}) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Id deporte</th>
            <th>Deporte</th>
            <th>Titulo</th>
            <th>Dias</th>
            <th>Horarios</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, index) => (
            <tr key={index + user.name}>
              <td>{user._id}</td>
              <td>{user.deporte_tipo}</td>
              <td>{user.name}</td>
              <td>{user.horarios}</td>
              <td>{user.dias}</td>
              <td>
                <Button
                  color="danger"
                  disabled={false}
                  onClick={() => handleDeleteUser(user._id)}
                  size="sm"
                  variant="outlined"
                >
                  Borrar
                </Button>
                <Button
                  color="primary"
                  disabled={false}
                  onClick={() => handleUpdateUser(user._id)}
                  size="sm"
                  variant="outlined"
                >
                  Modificar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default FormularioUser;
