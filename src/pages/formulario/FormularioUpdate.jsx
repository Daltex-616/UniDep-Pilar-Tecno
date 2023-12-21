import React from "react";
import {
  TextField,
  Box,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@mui/material";
import Button from "@mui/joy/Button";

const FormularioUpdate = ({
  setUpdatedUser,
  updatedUser,
  handleSaveUpdatedUser,
  handleCleanUpdate
}) => {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <InputLabel>Titulo</InputLabel>
        <TextField
          label="Actualizar titulo"
          variant="outlined"
          type="text"
          value={updatedUser.name || ""}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, name: e.target.value })
          }
          fullWidth
        />
        <InputLabel>Deporte</InputLabel>
        <Select
          value={updatedUser.deporte_tipo || ""}
          label="deportes"
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, deporte_tipo: e.target.value })
          }
          fullWidth
        >
          <MenuItem value="futbol">Futbol</MenuItem>
          <MenuItem value="mechas">Mecha</MenuItem>
          <MenuItem value="Voleibol">Voleibol</MenuItem>
          <MenuItem value="Natación">Natacion</MenuItem>
          <MenuItem value="Atletismo">Atletismo</MenuItem>
        </Select>
        <InputLabel>descripcion</InputLabel>
        <TextField
          label="Actualizar descripcion"
          variant="outlined"
          type="text"
          value={updatedUser.descripcion || ""}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, descripcion: e.target.value })
          }
          fullWidth
        />
        <InputLabel>Dias</InputLabel>
        <TextField
          label="Dias"
          variant="outlined"
          type="text"
          value={updatedUser.dias || ""}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              dias: e.target.value.split(","),
            })
          }
          fullWidth
        />
        <InputLabel>horarios</InputLabel>
        <TextField
          label="Actualizar titulo"
          variant="outlined"
          type="text"
          value={updatedUser.horarios || ""}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              horarios: e.target.value.split(","),
            })
          }
          fullWidth
        />
                <InputLabel>Url de Imagen</InputLabel>

        <TextField
          label="Url de Imagen"
          variant="outlined"
          type="text"
          value={updatedUser.urlimg || ""}
          onChange={(e) => {
            setUpdatedUser({ ...updatedUser, urlimg: String(e.target.value) });
          }}
          fullWidth
        />

        <InputLabel>Requisios</InputLabel>
        <TextField
          label="Requisitos"
          variant="outlined"
          type="text"
          value={updatedUser.requisitos || ""}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, requisitos: e.target.value })
          }
          fullWidth
        />
        <InputLabel>ubicacion</InputLabel>

        <TextField
          label="Latitud"
          variant="outlined"
          type="text"
          value={updatedUser.ubicacion?.latitud || ""}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              ubicacion: {
                ...updatedUser.ubicacion,
                latitud: e.target.value,
              },
            })
          }
        />
        <TextField
          label="Longitud"
          variant="outlined"
          type="text"
          value={updatedUser.ubicacion?.longitud || ""}
          onChange={(e) =>
            setUpdatedUser({
              ...updatedUser,
              ubicacion: {
                ...updatedUser.ubicacion,
                longitud: e.target.value,
              },
            })
          }
        />
        <Button
          sx={{ m: 2 }}
          type="submit"
          variant="outlined"
          onClick={handleSaveUpdatedUser}
        >
          Guardar Cambio
        </Button>
        <Button color="danger" disabled={false} size="sm" variant="outlined" onClick={handleCleanUpdate}>
          Cancelar
        </Button>
      </Box>
    </>
  );
};

export default FormularioUpdate;
