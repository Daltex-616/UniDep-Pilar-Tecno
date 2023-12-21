import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import fbicon from "../../assets/fbicon.png";
import twittericon from "../../assets/twittericon.png";
import linkedinicon from "../../assets/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Productos
            </Typography>

            <FooterLink>Listas</FooterLink>
            <br />
            <FooterLink>Propiedades</FooterLink>
            <br />
            <FooterLink>Agentes</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
                Recursos
            </Typography>

            <FooterLink>En casa</FooterLink>
            <br />
            <FooterLink>Historias</FooterLink>
            <br />
            <FooterLink>Videos</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Compañias
            </Typography>

            <FooterLink>todo depores</FooterLink>
            <br />
            <FooterLink>Deportarg</FooterLink>
            <br />
            <FooterLink>UniDep</FooterLink>
            <br />
            <FooterLink>Daltex.inc</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Ponerse en contacto
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Mas informacion en nuestras reedes
            </Typography>

            <IconBox>
              <img src={fbicon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twittericon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinicon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
