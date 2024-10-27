import React from 'react';
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductData } from '../types/ProductType';

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.productId}`);
  };

  return (
    <Tooltip title={product.description} arrow>
      <Card onClick={handleProductClick}>
        <CardMedia
          component="img"
          height="140"
          image={product.images[0]?.imgUrl || 'https://via.placeholder.com/150'}
          alt={product.productName || 'Product Image'}
        />
        <CardContent>
          <Typography variant="h6">{product.productName}</Typography>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default ProductCard;
