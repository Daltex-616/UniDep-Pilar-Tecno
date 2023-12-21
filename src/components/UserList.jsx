import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//redux
import { fetchAllUsers } from "../redux/store/users/index";
//mui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapView from "./MapView";
import Grid from "@mui/joy/Grid";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const UserList = () => {
  const { list } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const [expandedStates, setExpandedStates] = useState(
    Array(list.length).fill(false)
  );

  const handleExpandClick = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  const uperCaseText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h3" textAlign="center" mt="50" m={5} borderBottom={3}>Deportes Actuales </Typography>
      <div key={2} className="container">
        <div className="row">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
          >
            {list.map((deporte, index) => (
              <Grid key={index} xs={6}>
                <Card key={index} sx={{ maxWidth: 600 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={deporte.urlimg.join("")}
                    alt={deporte.id}
                  />
                  <Typography variant="h4" component="div">
                    {uperCaseText(deporte.name)}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Deporte: {deporte.deporte_tipo}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Dias a realizar: {deporte.dias.join(" - ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Horario: {deporte.horarios.join(" - ")}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Typography>Mas info ==={">"}</Typography>
                    <ExpandMore
                      expand={expandedStates[index]}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expandedStates[index]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse
                    in={expandedStates[index]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <Typography paragraph>
                        Descripcion: {deporte.descripcion}
                      </Typography>
                      <Typography paragraph>
                        Requisitos:{deporte.requisitos}
                      </Typography>

                      {typeof deporte.ubicacion === "object" ? (
                        <MapView
                          marker={deporte.ubicacion}
                          descripcion={deporte.descripcion}
                        />
                      ) : null}
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UserList;
