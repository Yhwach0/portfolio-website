# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript to showcase projects, skills, and professional development journey.

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **next-themes** - Dark/light mode theming
- **React Hook Form** - Form validation and management

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **VS Code** - Recommended development environment

## ✨ Features

### 🎨 Design & UX
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Smooth Animations** - Micro-interactions using Framer Motion
- **Modern UI** - Clean, professional design with attention to detail

### 📱 Sections
- **Hero Section** - Eye-catching introduction with social links
- **About Me** - Professional background and expertise
- **Skills** - Interactive skill cards with categorization
- **Projects** - Featured projects with live demos and code links
- **Contact** - Direct contact information and social profiles
- **Footer** - Additional navigation and branding

### 🔧 Technical Features
- **Component-Based Architecture** - Scalable and maintainable code structure
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant design patterns

## � Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── projects/           # Project-specific pages
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable UI components
│   │   ├── sections/           # Page sections (Hero, About, etc.)
│   │   ├── navbar.tsx          # Navigation component
│   │   ├── footer.tsx          # Footer component
│   │   └── theme-toggle.tsx    # Theme switcher
│   └── content/                # Static content and data
│       └── profile.ts          # Profile information
├── public/                     # Static assets
├── .vscode/                    # VS Code configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kairox065/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

### 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization Guide

### Personal Information
Edit `src/content/profile.ts` to update:
- Name, title, and description
- Email and contact information
- Skills and expertise levels
- Projects and their details
- Social media links

### Styling
- **Colors**: Modify `tailwind.config.ts` and CSS variables in `src/app/globals.css`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion settings in component files

### Adding New Projects
1. Update the `projects` array in `src/content/profile.ts`
2. Set `featured: true` for main projects
3. Provide demo URLs and GitHub links
4. Add relevant technologies

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```


## 🧩 Key Components

### Theme System
- Automatic system preference detection
- Manual toggle with smooth transitions
- Persistent theme selection

### Project Cards
- Gradient backgrounds with hover effects
- Expandable technology tags
- Internal and external navigation

### Skill Display
- Categorized frontend/backend skills
- Interactive pill-shaped cards
- Color-coded hover states

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report issues or bugs
- Suggest improvements
- Fork for your own portfolio


## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by clean design principles
- Optimized for performance and accessibility

---

**📧 Contact**: [Your Email](mailto:anasebraheem03@gmail.com)  
