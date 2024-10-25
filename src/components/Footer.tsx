import { Box } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'white',
        color: 'black',
        p: 2,
        borderTop: '1px solid #e0e0e0', 
      }}
    >
      Footer Content
    </Box>
  );
}

export default Footer;
