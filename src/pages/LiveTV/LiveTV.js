import React, { useEffect, useState } from 'react';
import { fetchLiveTVList } from '../../api/apiService';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const LiveTV = () => {
  dayjs.extend(utc);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const today = dayjs().format('DDMMMYYYY'); // for API
        const todayEP = dayjs().format('DD MMM YYYY'); // for key match
        const res = await fetchLiveTVList(today);
        const episodes = res?.data?.episodes?.[todayEP] || [];

        const now = dayjs.utc();

        const current = episodes.find(
          (episode) =>
            now.isAfter(dayjs(episode.video_start_time)) &&
            now.isBefore(dayjs(episode.video_end_time))
        );

        setCurrentVideo(current || episodes[0]);
        setEpisodeList(episodes);
      } catch (error) {
        console.error('Failed to fetch Live TV data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveData();
  }, []);

  if (loading) return <div className="p-4 text-white">Loading video...</div>;

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-2xl font-semibold mb-6">Live TV -</h1>

      {currentVideo ? (
        <div className="flex flex-col items-center mb-10">
          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${extractYouTubeID(currentVideo.url)}?autoplay=1`}
              title={currentVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">{currentVideo.title}</h2>
          <p className="text-sm text-gray-400">{currentVideo.readable_start_time}</p>
        </div>
      ) : (
        <p className="text-center">No video currently playing.</p>
      )}

      <h3 className="text-lg font-semibold mb-2">Today's Schedule</h3>
      <ul className="space-y-2">
        {episodeList.map((ep) => (
          <li key={ep.id} className="flex items-center space-x-4">
            <img
              src={ep.video_image}
              alt={ep.title}
              className="w-20 h-12 object-cover rounded"
            />
            <div>
              <p className="font-semibold">{ep.title}</p>
              <p className="text-sm text-gray-400">{ep.readable_start_time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Extract YouTube video ID from URL
const extractYouTubeID = (url) => {
  const match = url.match(/v=([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

export default LiveTV;
