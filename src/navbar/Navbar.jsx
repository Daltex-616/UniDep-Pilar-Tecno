import { React, useState } from "react";
import NavListDrawer from "./NavListDrawer";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Navbar = ({navArrayLinks}) => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" color="transparent" sx={{height:"100"}} >
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Deportes universitarios
          </Typography>
          {navArrayLinks.map((item) => (
            <Button
              color="inherit"
              key={item.title}
              component={NavLink}
              to={item.path}
            >
              {item.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
      </Drawer>
    </>
  );
};

export default Navbar;
