import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  const location = useLocation();

  return (
    <Box sx={{ width: 200, bgcolor: '#f0f0f0', p: 2 ,height: '100'}}>
      <List>
        <ListItem  component={Link} to="/" >
          <ListItemText primary="Home" 
            sx={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              color: location.pathname === "/" ? "primary.main" : "inherit",
            }}  />
        </ListItem>
        <ListItem  component={Link} to="tab2" >
          <ListItemText primary="Tab 2" 
            sx={{
              fontWeight: location.pathname === "/tab2" ? "bold" : "normal",
              color: location.pathname === "/tab2" ? "primary.main" : "inherit",
            }} />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
