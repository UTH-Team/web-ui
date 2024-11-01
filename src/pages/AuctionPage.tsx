import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import AuctionList from '../components/auction/AuctionList';

function AuctionPage() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={2}>
        <AuctionList />
        <Outlet /> 
      </Box>
    </Box>
  );
}

export default AuctionPage;
