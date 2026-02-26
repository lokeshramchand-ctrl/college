# IIT BHU Varanasi College Website

A modern, responsive website for Indian Institute of Technology (BHU) Varanasi built with Next.js and React. This project showcases information about the institution including academics, placements, campus facilities, and admissions.

## Overview

This is a comprehensive institutional website featuring multiple sections with smooth navigation and responsive design. The site is optimized for both desktop and mobile viewing with fast load times and modern UI/UX practices.

## Features

- Responsive design that works seamlessly on mobile, tablet, and desktop screens
- Smooth scrolling navigation between sections
- Mobile menu with hamburger navigation
- Multiple informational sections:
  - Hero section with prominent branding
  - About the institution
  - Academic programs and courses
  - Placements and career statistics
  - Campus facilities and amenities
  - News and updates
  - FAQ section
  - Testimonials
  - Contact information
- Optimized performance with modern web technologies
- Accessible and semantic HTML structure

## Technology Stack

- **Frontend Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **Language**: TypeScript 5
- **Styling**: Vanilla CSS with responsive design
- **Animations**: Framer Motion 12.34.3, GSAP 3.14.2
- **Icons**: Lucide React 0.575.0
- **Build Tool**: npm

## Project Structure

```
college/
├── app/
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page
│   ├── components/          # Reusable React components
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Campus.tsx
│   │   ├── Contact.tsx
│   │   ├── Courses.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── News.tsx
│   │   ├── Placements.tsx
│   │   └── Testimonials.tsx
│   ├── config/              # Configuration files
│   └── styles/              # CSS stylesheets
│       ├── components.css
│       ├── forms.css
│       ├── globals.css
│       └── hero.css
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd college
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The page will automatically hot-reload as you make changes.

### Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Component Architecture

Each section of the website is implemented as a reusable React component. Components are located in `app/components/` and use vanilla CSS for styling with responsive design patterns.

### Responsive Design

The application uses CSS media queries to provide optimal layouts for different screen sizes:

- Mobile (< 640px): Single-column layouts, hamburger menu navigation
- Tablet (640px - 768px): Two-column layouts with adjusted spacing
- Desktop (768px+): Full multi-column layouts with enhanced visuals
- Large Desktop (1024px+): Extended layouts with maximum spacing

### CSS Variables

The project uses CSS custom properties for maintaining consistent theming and making responsive adjustments easier:

- Colors (backgrounds, text, borders)
- Spacing (padding, margins, gaps)
- Typography (font sizes, line heights)

## Features in Detail

### Navigation

- Fixed top navigation bar with logo and menu links
- Mobile-responsive hamburger menu
- Smooth scroll navigation to different sections
- Active section highlighting

### Hero Section

- Full-viewport hero with background image on desktop
- Black background on mobile for better performance
- Responsive typography that scales with screen size
- Prominent call-to-action area

### Responsive Sections

All sections adapt their layout based on screen size:
- Text content wraps properly on smaller screens
- Grid layouts transition from single to multiple columns
- Images scale responsively
- Touch-friendly spacing on mobile devices



