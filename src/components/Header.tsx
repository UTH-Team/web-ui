import { Box } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Box
    component="header"
    sx={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1100,
      bgcolor: 'white',
      color: 'black',
      p: 2,
    }}
  >
    Header Content
  </Box>
  )
}

export default Header