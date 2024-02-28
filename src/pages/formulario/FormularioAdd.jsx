import { React } from "react";
import { TextField, Box, Select, InputLabel, MenuItem } from "@mui/material";
import Button from "@mui/joy/Button";

const FormularioAdd = ({ newUser, setNewUser, handleAddUser,handleCleanAddUser }) => {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <InputLabel>Titulo</InputLabel>
        <TextField
          id="name"
          label="Agregar titulo"
          variant="outlined"
          type="text"
          value={newUser.name || ""}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          fullWidth
        />
        <InputLabel id="papas">Deporte</InputLabel>

        <Select
          id="deporte_tipp"
          label="deportes"
          fullWidth
          value={newUser.deporte_tipo || ""}
          onChange={(e) =>
            setNewUser({ ...newUser, deporte_tipo: e.target.value })
          }
        >
          <MenuItem value="futbol">Futbol</MenuItem>
          <MenuItem value="mechas">Mecha</MenuItem>
          <MenuItem value="Voleibol">Voleibol</MenuItem>
          <MenuItem value="Natación">Natacion</MenuItem>
          <MenuItem value="Atletismo">Atletismo</MenuItem>
        </Select>

        <InputLabel>descripcion</InputLabel>
        <TextField
          id="descripcionUpdate"
          label="Agregar descripcion"
          variant="outlined"
          type="text"
          value={newUser.descripcion || ""}
          onChange={(e) =>
            setNewUser({ ...newUser, descripcion: e.target.value })
          }
          fullWidth
        />
        <InputLabel>Dias</InputLabel>
        <TextField
          id="dias"
          label="Dias"
          variant="outlined"
          type="text"
          value={newUser.dias || ""}
          onChange={(e) =>
            setNewUser({ ...newUser, dias: e.target.value.split(",") })
          }
          fullWidth
        />
        <InputLabel>horarios</InputLabel>
        <TextField
          id="horarios"
          label="Agregar horaio"
          variant="outlined"
          type="text"
          value={newUser.horarios || ""}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              horarios: e.target.value.split(","),
            })
          }
          fullWidth
        />
        <InputLabel>Url de Imagen</InputLabel>
        <TextField
          id="urlimg"
          label="Url de Imagen"
          variant="outlined"
          type="text"
          value={newUser.urlimg || ""}
          onChange={(e) =>
            setNewUser({ ...newUser, urlimg: e.target.value.split(",") })
          }
          fullWidth
        />
        <InputLabel>Requisios</InputLabel>
        <TextField
          id="requisitos"
          label="Requisitos"
          variant="outlined"
          type="text"
          value={newUser.requisitos || ""}
          onChange={(e) =>
            setNewUser({ ...newUser, requisitos: e.target.value })
          }
          fullWidth
        />
        <InputLabel>ubicacion</InputLabel>
        <TextField
          id="latitud"
          label="latitud"
          variant="outlined"
          type="text"
          value={newUser.ubicacion?.latitud || ""}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              ubicacion: {
                ...newUser.ubicacion,
                latitud: e.target.value,
              },
            })
          }
        />
        <TextField
          id="longitud"
          label="longitud"
          variant="outlined"
          type="text"
          value={newUser.ubicacion?.longitud || ""}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              ubicacion: {
                ...newUser.longitud,
                longitud: e.target.value,
              },
            })
          }
        />
        <Button
          sx={{ m: 2 }}
          type="submit"
          variant="outlined"
          onClick={handleAddUser}
        >
          Guardar
        </Button>
        <Button color="danger" disabled={false} size="sm" variant="outlined" onClick={handleCleanAddUser}>
          Cancelar
        </Button>
      </Box>
    </>
  );
};

export default FormularioAdd;
