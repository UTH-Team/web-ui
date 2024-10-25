import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <Box sx={{ width: 200, bgcolor: '#f0f0f0', p: 2 }}>
      <List>
        <ListItem  component={Link} to="tab1">
          <ListItemText primary="Tab 1" />
        </ListItem>
        <ListItem  component={Link} to="tab2">
          <ListItemText primary="Tab 2" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
