import { Box } from '@mui/material'
import React from 'react'
import { useGetAllProductQuery } from '../services/product.service'

function AboutPage() {
  const baseURL = import.meta.env.VITE_BASE_URL
  const {data} = useGetAllProductQuery();
  console.log("data : ",data )
  return (
    <Box>
      {baseURL}
    </Box>
  )
}

export default AboutPage