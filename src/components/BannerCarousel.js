import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const BannerCarousel = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change autoplay speed to 3000 milliseconds (3 seconds)
  };

  // Array of image URLs
  const images = [
    'https://images.unsplash.com/photo-1605773527852-c546a8584ea3',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1523475496153-efd7be8a8141',
  ];

  return (
    <Box sx={{ maxWidth: '1280px', margin: 'auto', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              height: '500px', // Adjust height to match your Figma design
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${url})`,
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              sx={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fff',
                textAlign: 'center',
                width: '100%',
                padding: '0 30px', // Add padding to ensure text doesn't touch the edges
              }}
            >
              Slide {index + 1}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannerCarousel;
