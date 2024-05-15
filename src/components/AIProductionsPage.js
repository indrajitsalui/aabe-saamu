import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

// Placeholder data for AI-produced videos - replace with real data
const aiProductionsData = [
  // Add six AI production objects
  // ...
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },

  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },

  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },

  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'AI Production 1',
    description: 'An exciting AI-generated video.',
  },

];

const AIProductionsPage = () => {
  return (
    <Box sx={{ maxWidth: '1280px', margin: 'auto', padding: '16px' }}>
      {/* Placeholder for the banner */}
      <Box
        sx={{
          height: '200px',
          backgroundColor: '#d8d8d8',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h5">Banners</Typography>
      </Box>

      <Typography variant="h4" gutterBottom>
        AI Productions Videos
      </Typography>

      <Grid container spacing={2}>
        {aiProductionsData.slice(0, 6).map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
            <Card raised sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={video.imageUrl}
                  alt={video.title}
                  sx={{ height: 140, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Placeholder for the footer */}
     
    </Box>
  );
};

export default AIProductionsPage;
