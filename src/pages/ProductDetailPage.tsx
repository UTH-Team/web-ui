// ProductDetailPage.tsx
import React from 'react';
import { Box, Grid, Breadcrumbs, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/product/ImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import SellerInfo from '../components/product/SellerInfo';
import Comments from '../components/product/Comment';


function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Convert id to a number safely
  const productId = id ? String(id) : '0';

  // Sample productDetail data
  const productDetail = {
    productId: productId,
    title: 'Sample Product',
    description: 'This is a sample product description.',
    price: 1000,
    status: 'AVAILABLE',
    createAt: Date.now(),
    category: { name: 'Electronics' },
    seller: { userId: 'seller123', username: 'SellerName' },
    images: ['https://via.placeholder.com/600', 'https://via.placeholder.com/601'],
  };

  return (
    <Box p={4} maxWidth="lg" mx="auto">
      {/* Breadcrumb */}
      <Box mb={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href={`/category/${productDetail.category.name}`}>
            {productDetail.category.name}
          </Link>
          <Typography color="textPrimary">{productDetail.title}</Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Image Gallery */}
        <Grid item xs={12} md={6}>
          <ImageGallery images={productDetail.images} />
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <ProductInfo product={productDetail} />
        </Grid>

        {/* Seller Info */}
        <Grid item xs={12}>
          <SellerInfo seller={productDetail.seller} />
        </Grid>

        {/* Comments */}
        <Grid item xs={12}>
          <Comments productId={productDetail.productId} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetailPage;
