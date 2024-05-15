import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

// Placeholder data for advertisements - replace with real data
const advertisementsData = [
  // Assuming you have 6 advertisements based on the design
  { id: 1, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 1', description: 'Description here...' },
  { id: 2, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 2', description: 'Description here...' },
  { id: 3, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 3', description: 'Description here...' },
  { id: 4, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 4', description: 'Description here...' },
  { id: 5, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 5', description: 'Description here...' },
  { id: 6, imageUrl: 'https://via.placeholder.com/300', title: 'Advertisement 6', description: 'Description here...' },
];

const AdvertisementsPage = () => {
  return (
    <Box sx={{ maxWidth: '1280px', margin: 'auto', padding: '16px' }}>
      <Box sx={{ height: '200px', backgroundColor: '#d8d8d8', marginBottom: '24px' }}>
        {/* Placeholder for banner content */}
        <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: '200px' }}>Advertisement Banner</Typography>
      </Box>

      <Typography variant="h4" gutterBottom component="div">
        Advertisements
      </Typography>

      <Grid container spacing={4}>
        {advertisementsData.map(ad => (
          <Grid item xs={12} sm={6} md={4} key={ad.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CardContent>
                <Box
                  component="img"
                  sx={{
                    height: 140,
                    width: '100%',
                    objectFit: 'cover',
                    backgroundColor: ad.imageUrl, // Replace with your image URLs
                  }}
                  alt={ad.title}
                />
                <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                  {ad.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {ad.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Footer */}
     
    </Box>
  );
};

export default AdvertisementsPage;
