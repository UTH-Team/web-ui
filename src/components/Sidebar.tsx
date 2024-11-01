import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  const location = useLocation();

  return (
    <Box sx={{ width: 200, bgcolor: '#f0f0f0', p: 2, height: '100' }}>
      <List>
        <ListItem component={Link} to="/">
          <ListItemText
            primary="HOME"
            sx={{
              fontWeight: location.pathname === "/" ? 'bold' : 'normal',
              color: location.pathname === "/" ? 'blue' : 'black',
              textTransform: 'uppercase',
            }}
          />
        </ListItem>
        <ListItem component={Link} to="/cart">
          <ListItemText
            primary="CART"
            sx={{
              fontWeight: location.pathname === "/cart" ? 'bold' : 'normal',
              color: location.pathname === "/cart" ? 'blue' : 'black',
              textTransform: 'uppercase',
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
