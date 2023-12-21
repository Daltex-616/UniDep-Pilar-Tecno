import React from "react";
import { Box } from "@mui/system";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";



const NavListDrawer = ({ navArrayLinks,NavLink,setOpen }) => {
  return (
    <>
      <Box sx={{ width: 250 }}>
        <nav>
          <List>
            {navArrayLinks.map(
              (item => (
                <ListItem disablePadding key={item.title}>
                  <ListItemButton component={NavLink} to={item.path} onClick={()=> setOpen(false)}>
                    <ListItemText>{item.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            )}
          </List>
        </nav>
      </Box>
    </>
  );
};

export default NavListDrawer;
