// SellerInfo.tsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from '@mui/material';

interface SellerInfoProps {
  seller: any;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ seller }) => {
  // Fetch seller's posted products
  const postedProducts = [
    // Sample data
    {
      productId: '1',
      title: 'Sample Product 1',
      price: 500,
      images: ['https://via.placeholder.com/200'],
      status: 'AVAILABLE',
    },
    {
      productId: '2',
      title: 'Sample Product 2',
      price: 1500,
      images: ['https://via.placeholder.com/201'],
      status: 'SOLD',
    },
  ];

  return (
    <Box mt={4}>
      {/* Seller Information */}
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar
              src={seller.profileImageUrl || 'https://via.placeholder.com/150'}
              alt={seller.username}
              sx={{ width: 80, height: 80, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">{seller.username}</Typography>
              <Typography variant="body2" color="textSecondary">
                Member since {new Date().getFullYear() - 1}
              </Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">Bio:</Typography>
            <Typography variant="body2" color="textSecondary">
              {seller.bio || 'No bio available.'}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Seller's Posted Products */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Other products from {seller.username}
        </Typography>
        <Grid container spacing={2}>
          {postedProducts
            .filter((product) => product.status === 'AVAILABLE')
            .map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.productId}>
                <Card>
                  <CardContent>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <Typography variant="body1" mt={1}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="error">
                      {product.price.toLocaleString()} VND
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SellerInfo;
