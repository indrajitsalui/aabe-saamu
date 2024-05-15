import React from 'react';
import SlidableContentSection from './SlidableContentSection' ; // Make sure you have the Section component created as shown previously

const HomePageContent = () => {
  // Placeholder data for Live TV content
  const liveTVContentData = [
    {
      title: 'Live Show 1',
      description: 'Tune in to our exciting live show!',
      imageUrl: 'https://via.placeholder.com/345x140.png?text=Live+Show+1',
    },
    // ... more live TV content
  ];

  // Placeholder data for AI Productions content
  const aiProductionsContentData = [
    {
      title: 'AI Movie 1',
      description: 'A groundbreaking AI production.',
      imageUrl: 'https://via.placeholder.com/345x140.png?text=AI+Movie+1',
    },
    
    // ... more AI Productions content
  ];
  const advertisementsContentData = [
    {
      title: 'AI Movie 1',
      description: 'A groundbreaking AI production.',
      imageUrl: 'https://via.placeholder.com/345x140.png?text=AI+Movie+1',
    },
    
    // ... more AI Productions content
  ];


  return (
    <>
      <SlidableContentSection title="Watch Live TV" contentData={liveTVContentData} />
      <SlidableContentSection title="AI Productions Videos" contentData={aiProductionsContentData} />
      <SlidableContentSection title="Advertisements" contentData={advertisementsContentData} />
    </>
  );
};

export default HomePageContent;
