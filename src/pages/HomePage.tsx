import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={2}>
        <Outlet /> 
      </Box>
    </Box>
  );
}

export default HomePage;
