
import React, { useState, useEffect, useCallback } from 'react';
import { Story } from '../types/story';
import StoryProgress from './StoryProgress';
import { X } from 'lucide-react';

interface StoryViewerProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ stories, initialStoryIndex, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStory = stories[currentStoryIndex];
  const totalSegments = currentStory?.media.length || 0;
  const STORY_DURATION = 5000; // 5 seconds

  const goToNextMedia = useCallback(() => {
    if (currentMediaIndex < totalSegments - 1) {
      setCurrentMediaIndex(prev => prev + 1);
      setProgress(0);
    } else if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setCurrentMediaIndex(0);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentMediaIndex, totalSegments, currentStoryIndex, stories.length, onClose]);

  const goToPreviousMedia = useCallback(() => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(prev => prev - 1);
      setProgress(0);
    } else if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      const prevStory = stories[currentStoryIndex - 1];
      setCurrentMediaIndex(prevStory.media.length - 1);
      setProgress(0);
    }
  }, [currentMediaIndex, currentStoryIndex, stories]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (STORY_DURATION / 100));
        if (newProgress >= 100) {
          goToNextMedia();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, goToNextMedia]);

  const handleLeftTap = () => {
    goToPreviousMedia();
  };

  const handleRightTap = () => {
    goToNextMedia();
  };

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-md mx-auto">
        <StoryProgress
          segments={totalSegments}
          currentSegment={currentMediaIndex}
          progress={progress}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="absolute top-16 left-4 right-4 z-20 flex items-center space-x-3">
          <img
            src={currentStory.userAvatar}
            alt={currentStory.username}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="text-white font-medium">{currentStory.username}</span>
          <span className="text-white/70 text-sm">
            {new Date(currentStory.timestamp).toLocaleDateString()}
          </span>
        </div>

        <div className="relative w-full h-full flex">
          <div
            className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-pointer"
            onClick={handleLeftTap}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />
          
          <div
            className="absolute right-0 top-0 w-2/3 h-full z-10 cursor-pointer"
            onClick={handleRightTap}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />

          <img
            src={currentStory.media[currentMediaIndex]?.url}
            alt="Story content"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;