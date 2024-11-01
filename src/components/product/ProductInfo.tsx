// ProductInfo.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Badge,
  Rating,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Share,
  Chat,
  Facebook,
  Message,
} from '@mui/icons-material';

interface ProductInfoProps {
  product: any;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // Implement add/remove from wishlist logic
  };

  const handleShare = (platform: string) => {
    if (platform === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        '_blank'
      );
    } else if (platform === 'message') {
      alert('Message sharing not implemented yet.');
    }
  };

  const handleChatWithSeller = () => {
    // Implement chat with seller logic
  };

  return (
    <Box>
      {/* Product Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {product.title}
      </Typography>

      {/* Category */}
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Category: {product.category.name}
      </Typography>

      {/* Rating */}
      <Box display="flex" alignItems="center">
        <Rating value={4.5} readOnly precision={0.5} />
        <Typography variant="body2" ml={1}>
          4.5 / 5
        </Typography>
      </Box>

      {/* Price */}
      <Typography variant="h5" color="error" mt={2}>
        Price: {product.price.toLocaleString()} VND
      </Typography>

      {/* Status */}
      <Typography variant="body1" mt={1}>
        Status:{' '}
        <Badge
          badgeContent={product.status}
          color={product.status === 'AVAILABLE' ? 'success' : 'warning'}
        />
      </Typography>

      {/* Date */}
      <Typography variant="body2" color="textSecondary" mt={1}>
        Posted on: {new Date(product.createAt).toLocaleDateString()}
      </Typography>

      {/* Wishlist and Chat Buttons */}
      <Box display="flex" mt={2} gap={2}>
        <Button
          variant="contained"
          color={isWishlisted ? 'secondary' : 'primary'}
          startIcon={
            isWishlisted ? <Favorite /> : <FavoriteBorder />
          }
          onClick={handleWishlistToggle}
        >
          {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Chat />}
          onClick={handleChatWithSeller}
        >
          Chat with Seller
        </Button>
      </Box>

      {/* Share Section */}
      <Box display="flex" alignItems="center" mt={2}>
        <Typography variant="body1" mr={1}>
          Share:
        </Typography>
        <IconButton color="primary" onClick={() => handleShare('facebook')}>
          <Facebook />
        </IconButton>
        <IconButton color="primary" onClick={() => handleShare('message')}>
          <Message />
        </IconButton>
      </Box>

      {/* Description */}
      <Box mt={2}>
        <Typography variant="h6">Description:</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfo;
