<<<<<<< HEAD
# Sampath_resume
=======
# Resume Portfolio - Next.js

A stunning, modern animated resume portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features incredible animations, 3D effects, particle systems, and smooth transitions.

## Features

- 🎨 **Modern Design**: Clean, professional design with a dark theme and glassmorphism effects
- ✨ **Awesome Animations**: 
  - Text reveal animations with character-by-character effects
  - 3D transforms and perspective effects
  - Floating particle systems
  - Parallax scrolling effects
  - Interactive hover animations
  - Timeline animations for experience section
  - Animated gradient backgrounds
  - Scroll-triggered animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Fast**: Built with Next.js 15 for optimal performance
- 🎯 **Interactive**: 
  - Scroll progress indicator
  - Animated sections with scroll triggers
  - Interactive skill cards with hover effects
  - Smooth scroll navigation
  - Mouse-follow 3D effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
resume-app/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Skills.tsx       # Technical skills
│   ├── Education.tsx    # Education section
│   ├── Contact.tsx      # Contact section
│   ├── BackgroundAnimation.tsx  # Animated background
│   └── ScrollProgress.tsx       # Scroll progress bar
└── lib/
    └── resume-data.ts   # Resume data structure
```

## Customization

Edit `lib/resume-data.ts` to update your resume information:

- Personal information
- Work experience
- Skills
- Education
- Contact links

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React 19** - UI library

## License

MIT
>>>>>>> a4fb3ed (resume)
