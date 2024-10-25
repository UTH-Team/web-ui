import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"  
    >
      {/* Header luôn nằm ở đầu */}
      <Header />

      {/* Children sẽ lấp đầy khoảng trống giữa header và footer */}
      <Box flexGrow={1}>
        {children}
      </Box>

      {/* Footer luôn nằm cuối */}
      <Footer />
    </Box>
  );
}

export default DefaultLayout;
