import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Pagination, Grid, Card, CardContent, CardMedia, Tooltip, CircularProgress } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useGetAllProductQuery } from '../services/product.service';
import { ProductData } from '../types/ProductType';

const categories: string[] = ['Category 1', 'Category 2', 'Category 3'];

const Tab1: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllProductQuery();

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  // Xử lý phân trang
  const paginatedProducts = data?.data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) || [];

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={3}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Failed to load products</Typography>;
  }

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
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} mb={2}>Top Search Products</Typography>
        <Grid container spacing={2}>
          {data?.data.slice(0, 5).map((product: ProductData) => (
            <Grid item xs={12} sm={6} md={4} key={product.productId}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.productId)}>
                  <CardMedia
                    component="img"
                    height="200"  // Tăng chiều cao ảnh
                    style={{ width: 'auto', margin: '0 auto' }} // Giảm chiều rộng và căn giữa
                    image={product.images[0]?.imgUrl || 'https://via.placeholder.com/150'}
                    alt={product.productName}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.productName}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Today's Suggestions */}
      <Box mt={3}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} mb={2}>Today's Suggestions</Typography>
        <Grid container spacing={2}>
          {data?.data.slice(0, 10).map((product: ProductData) => (
            <Grid item xs={12} sm={6} md={4} key={product.productId}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.productId)}>
                  <CardMedia
                    component="img"
                    height="200"
                    style={{ width: 'auto', margin: '0 auto' }}
                    image={product.images[0]?.imgUrl || 'https://via.placeholder.com/150'}
                    alt={product.productName}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.productName}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newest Products */}
      <Box mt={3}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} mb={2}>Newest Products</Typography>
        <Grid container spacing={2}>
          {paginatedProducts.map((product: ProductData) => (
            <Grid item xs={12} sm={6} md={4} key={product.productId}>
              <Tooltip title={product.description} arrow>
                <Card onClick={() => handleProductClick(product.productId)}>
                  <CardMedia
                    component="img"
                    height="200"
                    style={{ width: 'auto', margin: '0 auto' }}
                    image={product.images[0]?.imgUrl || 'https://via.placeholder.com/150'}
                    alt={product.productName}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.productName}</Typography>
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={Math.ceil((data?.data.length || 0) / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tab1;
