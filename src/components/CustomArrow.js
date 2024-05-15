import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block', right: '10px', zIndex: 2 }}
    onClick={onClick}
  >
    <ArrowForwardIosIcon style={{ color: 'white', fontSize: '30px' }} />
  </div>
);

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block', left: '10px', zIndex: 2 }}
    onClick={onClick}
  >
    <ArrowBackIosIcon style={{ color: 'white', fontSize: '30px' }} />
  </div>
);
