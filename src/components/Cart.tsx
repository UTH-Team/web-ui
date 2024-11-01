// Tab2.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

function Cart() {
 
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      productId: 1,
      productName: 'Product 1',
      quantity: 2,
      price: 10.0,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      productId: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 20.0,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]);

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Giỏ hàng của bạn
      </Typography>
      {cartItems.map((item) => (
        <Card key={item.productId} sx={{ display: 'flex', marginBottom: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={item.imageUrl}
            alt={item.productName}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {item.productName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Số lượng: {item.quantity}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Giá: ${item.price}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: 1 }}>
            <IconButton onClick={() => handleRemoveItem(item.productId)}>
              <Delete />
            </IconButton>
          </Box>
        </Card>
      ))}
      <Typography variant="h5" gutterBottom>
        Tổng cộng: ${totalPrice.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary">
        Thanh toán
      </Button>
    </Box>
  );
}

export default Cart;
