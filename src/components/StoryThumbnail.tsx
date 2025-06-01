
import React from 'react';
import { Story } from '../types/story';

interface StoryThumbnailProps {
  story: Story;
  onClick: () => void;
  isViewed?: boolean;
}

const StoryThumbnail: React.FC<StoryThumbnailProps> = ({ story, onClick, isViewed = false }) => {
  return (
    <div 
      className="flex flex-col items-center space-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative p-0.5 rounded-full ${isViewed ? 'bg-gray-300' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'}`}>
        <div className="p-0.5 bg-white rounded-full">
          <img
            src={story.userAvatar}
            alt={story.username}
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <span className="text-xs text-gray-800 font-medium truncate max-w-[70px]">
        {story.username}
      </span>
    </div>
  );
};

export default StoryThumbnail;