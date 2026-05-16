# Portfolio Website - React Version

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Recreated from the original Svelte version with the same design and features.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📦 Installation

```bash
pnpm install
```

## 🛠️ Development

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

```bash
pnpm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, Technologies, etc.)
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── ui/                # Reusable UI components
│   └── utils/             # Utility components
├── pages/                 # Route pages
├── hooks/                 # Custom React hooks
├── lib/
│   ├── data.ts           # All content data (EDIT THIS!)
│   ├── navigation.tsx    # Navigation configuration
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
├── App.tsx               # Main app with routing
└── main.tsx              # Entry point
```

## 🎨 Customization

### Update Your Information

**All content is in `src/lib/data.ts`** - Edit this file to customize:

#### Personal Information
```typescript
export const personalInfo = {
  name: {
    first: 'Your First Name',
    last: 'Your Last Name',
    full: 'Your Full Name'
  },
  title: 'Your Job Title',
  bio: 'Your bio...',
  email: 'your.email@example.com',
  phone: '+1 234 567 890',
  location: {
    city: 'Your City',
    state: 'State',
    full: 'City, State',
    mapUrl: 'https://maps.google.com/...'
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  profileImage: '/img/profile_pictures/your-image.webp'
};
```

#### Footer Text
```typescript
export const footerInfo = {
  thankYouTitle: 'Your title',
  thankYouMessage: 'Your message...',
  aboutText: 'Your about text...',
  copyright: '2025 Your Name. All rights reserved.'
};
```

#### Experience
```typescript
export const experiences: Experience[] = [
  {
    title: 'Your Job Title',
    company: {
      name: 'Company Name',
      logo: 'logo.png',  // Place in public/img/logos/
      href: 'https://company.com',
      bg: 'bg-teal-400/20'
    },
    location: 'City, State',
    date: {
      start: new Date('2023-01-15'),
      end: null  // null for current job
    },
    description: 'What you did...',
    technologies: ['React', 'TypeScript', 'Node.js']
  }
];
```

#### Projects
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Short description...',
    thumbnail: 'https://...',  // or '/img/projects/image.jpg'
    stack: ['React', 'Node.js'],
    live: 'https://project-url.com',
    images: [
      'https://image1.jpg',
      'https://image2.jpg'
    ],
    features: ['Feature 1', 'Feature 2'],
    contributers: [
      { name: 'Your Name', href: 'https://github.com/you' }
    ],
    content: [
      {
        title: 'Section Title',
        text: ['Paragraph 1...', 'Paragraph 2...']
      }
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/...' }
    ],
    updatedAt: new Date('2024-12-15')
  }
];
```

#### Technologies
```typescript
export const tools: Tool[] = [
  {
    name: 'Technology Name',
    file: 'logo.png',  // Place in public/img/logos/
    options: { bg: 'bg-blue-400/20', invert: false }
  }
];
```

### Add Images

1. **Profile Picture**: Add to `public/img/profile_pictures/`
2. **Company Logos**: Add to `public/img/logos/`
3. **Tech Logos**: Add to `public/img/logos/`
4. **Project Images**: Use external URLs or add to `public/img/projects/`

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light mode with persistence
- ✅ Smooth, optimized animations (60fps)
- ✅ Individual project pages with routing
- ✅ Image carousels for projects
- ✅ Navbar with mobile menu
- ✅ Footer with contact info
- ✅ Same design as original Svelte app
- ✅ Type-safe with TypeScript
- ✅ Fast development with Vite HMR

## 🎯 Pages

- **Home** (`/`) - Hero, Technologies, Experience, Projects
- **Project Detail** (`/projects/:id`) - Full project information with carousel

## 📝 Data Management

All content is centralized in `src/lib/data.ts`:
- ✅ No hardcoded text in components
- ✅ Easy to update all information
- ✅ Type-safe with TypeScript
- ✅ Single source of truth

## 🔗 Navigation

The navbar links to:
- **Home** → `/` (top of page)
- **Experience** → `#experience` (scrolls to section)
- **Projects** → `#projects` (scrolls to section)
- **Resume** → `/resume` (add this page if needed)

## 📄 License

This project is for personal use.
