import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Footer from "./Footer";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (<>
    <Box sx={{minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
              fontSize: "18px",
              color: "#687690",
              fontWeight: "500",
              mt: 10,
              mb: 4,
              }}
            >
              Bienvenidos a Deportes Universitarios
            </Typography>
            <Title variant="h1">
              Descubre un lugar donde te encantará vivir.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Enterate de todos los tipos de deportes universitarios que se realizan en la provincia de la rioja
              y no te pierdas ninguno
            </Typography>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src="https://livepkassets.pechakucha.com/slides/cdf7894f-7001-4dba-84c9-15cdf8316e88/magiadedeporte.png"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    <Footer/>
    </Box>
    </>
  );
};

export default Home;
