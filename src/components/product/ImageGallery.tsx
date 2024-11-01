// ImageGallery.tsx
import React, { useState } from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box>
      {/* Image Carousel */}
      <Box position="relative" textAlign="center">
        <img
          src={images[currentIndex]}
          alt={`Product Image ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto' }}
        />
        <IconButton
          onClick={handlePrev}
          style={{ position: 'absolute', top: '50%', left: 0 }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          style={{ position: 'absolute', top: '50%', right: 0 }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Thumbnails */}
      <Grid container spacing={1} justifyContent="center" mt={1}>
        {images.map((img, index) => (
          <Grid item key={index}>
            <Box
              component="img"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              sx={{
                width: 60,
                height: 60,
                border:
                  currentIndex === index
                    ? '2px solid blue'
                    : '1px solid grey',
                cursor: 'pointer',
              }}
              onClick={() => goToSlide(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
