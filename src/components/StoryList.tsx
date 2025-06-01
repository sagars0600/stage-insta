
import React, { useState } from 'react';
import { Story } from '../types/story';
import StoryThumbnail from './StoryThumbnail';
import StoryViewer from './StoryViewer';

interface StoriesListProps {
  stories: Story[];
}

const StoriesList: React.FC<StoriesListProps> = ({ stories }) => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);
  const [viewedStories, setViewedStories] = useState<Set<string>>(new Set());

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);
  };

  const handleCloseViewer = () => {
    if (selectedStoryIndex !== null) {
      setViewedStories(prev => new Set(prev).add(stories[selectedStoryIndex].id));
    }
    setSelectedStoryIndex(null);
  };

  return (
    <>
      <div className="px-4 py-2">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {stories.map((story, index) => (
            <div key={story.id} className="flex-shrink-0">
              <StoryThumbnail
                story={story}
                onClick={() => handleStoryClick(index)}
                isViewed={viewedStories.has(story.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialStoryIndex={selectedStoryIndex}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
};

export default StoriesList;