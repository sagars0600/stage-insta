# Instagram-Stories-Clone

A simplified, mobile-only “Instagram Stories” feature built with **React** and **TypeScript**. Users can scroll through a horizontal list of story thumbnails, open a story, tap left/right to navigate between stories, and watch each story automatically advance every 5 seconds. No backend or persistence is implemented—focus is purely on UI/UX, transitions, and end-to-end testing.

## Live Deployment

[https://your-deployment-link.com](https://your-deployment-link.com)

> **Note:** Replace the URL above with your actual deployment (e.g., a Vercel/Netlify link).


## Features

- **Mobile-only UI**: Designed and styled exclusively for smaller viewports (≤ 480px width).
- **Horizontal Story Carousel**: Displays a scrollable list of image thumbnails fetched from a static JSON file.
- **Story Viewer**  
  - Tap a thumbnail to open full-screen view.  
  - Tap left/right side to go to previous/next story.  
  - Each story automatically advances to the next after 5 seconds.  
  - Loading indicator while each image loads.  
  - Smooth CSS transitions between stories.  
- **No External UI-Library for Core Logic**: All navigation, timing, and transition logic is handwritten in React/TypeScript.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 16 (recommended: Node 18 LTS)  
- **npm** ≥ 8 (bundled with Node.js)  

You can verify your versions by running:
```bash
node -v
npm -v
