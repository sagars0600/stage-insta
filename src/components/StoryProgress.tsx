import React from 'react';

interface StoryProgressProps {
  segments: number;
  currentSegment: number;
  progress: number;
}

const StoryProgress: React.FC<StoryProgressProps> = ({ segments, currentSegment, progress }) => {
  return (
    <div className="absolute top-2 left-4 right-4 z-30 flex space-x-1">
      {Array.from({ length: segments }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: index < currentSegment ? '100%' : index === currentSegment ? `${progress}%` : '0%'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StoryProgress;