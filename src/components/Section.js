import React from 'react';
import { Typography, Grid } from '@mui/material';
import ContentCard from './ContentCard';

const Section = ({ title, contentData }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom component="div" sx={{ p: 2 }}>
        {title}
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {contentData.map((content, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ContentCard
              title={content.title}
              description={content.description}
              imageUrl={content.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section;
