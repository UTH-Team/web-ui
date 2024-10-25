import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

function NoneLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"  
    >
      <Box flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
}

export default NoneLayout;
