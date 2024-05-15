import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CustomArrow';
import { Typography, Box, useTheme } from '@mui/material';
import ContentCard from './ContentCard'; // Your custom card component


const SlidableContentSection = ({ title, contentData }) => {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: '1280px', margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Slider {...settings}>
        {contentData.map((content, index) => (
          <Box key={index} sx={{ padding: 1 }}>
            <ContentCard {...content} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SlidableContentSection;
