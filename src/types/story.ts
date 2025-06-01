export interface StoryMedia {
  url: string;
}

export interface Story {
  id: string;
  username: string;
  userAvatar: string;
  timestamp: string;
  media: StoryMedia[];
}
