
import React from 'react';
import { useStories } from '../hooks/useStories';
import StoriesList from '../components/StoryList';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const { stories, loading, error } = useStories();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      {!isMobile ? (
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-8 text-center">
            <h1 className="text-xl font-bold mb-4 font-bold">📱 Mobile View Only</h1>
            <p>This Instagram Stories feature is designed for mobile devices only.</p>
            <p className="mt-4">Please open this application on a mobile device or resize your browser window to view the content.</p>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <header className="border-b border-gray-200 p-4">
            <h1 className="text-xl font-bold">Instagram Stories</h1>
          </header>

          {loading ? (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-600"></div>
            </div>
          ) : error ? (
            <div className="p-4 text-red-500 text-center">
              Failed to load stories. Please try again later.
            </div>
          ) : (
            <StoriesList stories={stories} />
          )}
        </div>
      )}
    </div>
  );
};

export default Index;