import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Pagination, Grid, Card, CardContent, CardMedia, Tooltip, Grid2 } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
const products: Product[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  image: `https://via.placeholder.com/150`,
  description: `Detailed description for Product ${index + 1}. This product is of great quality and highly recommended for use.`,
}));
const topSearchProducts: Product[] = products.slice(0, 5);
const todaySuggestions: Product[] = products.slice(5, 10);

const Tab1: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box p={3}>
      {/* Carousel */}
      <Carousel autoPlay interval={3000}>
        {categories.map((category, index) => (
          <Box key={index} display="flex" justifyContent="center" alignItems="center" height="200px" bgcolor="lightgrey">
            <Typography variant="h6">{category}</Typography>
          </Box>
        ))}
      </Carousel>

      {/* Category Section */}
      <Box mt={3} display="flex" justifyContent="space-around">
        {categories.map((category, index) => (
          <Button key={index} variant="outlined">
            {category}
          </Button>
        ))}
      </Box>

      {/* Top Search Products */}
      <Box mt={3}>
        <Typography variant="h5" mb={2}>Top Search Products</Typography>
        <Grid container spacing={2}>
          {topSearchProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Today's Suggestions */}
      <Box mt={3}>
        <Typography variant="h5" mb={2}>Today's Suggestions</Typography>
        <Grid container spacing={2}>
          {todaySuggestions.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newest Products */}
      <Box mt={3}>
        <Typography variant="h5" mb={2}>Newest Products</Typography>
        <Grid container spacing={2}>
          {paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tab1;
