# Portfolio Website

A modern, responsive portfolio website built with React, Express, and TypeScript.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 💬 Contact form with local storage
- 🚀 Fast and optimized
- 🎯 Project showcase

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Express, Node.js
- **Database**: PostgreSQL (optional, uses local storage for messages)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhaskar787/devportfolio.git
cd devportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio
PORT=5000
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5000](http://localhost:5000)

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com)

### Option 2: Deploy to Render

1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Select "Web Service"
4. Use the settings from `render.yaml`
5. Add environment variables:
   - `NODE_ENV=production`
   - `PORT=5000`
   - `DATABASE_URL` (if using database)

### Option 3: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will auto-detect and deploy

## Build

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check

## License

MIT
