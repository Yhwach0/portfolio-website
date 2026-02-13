# Portfolio Website

A modern, responsive single-page portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Dark/Light Mode**: Smooth theme switching with system preference detection
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Mobile-first approach with animated hamburger menu
- **Accessibility**: Keyboard support, ARIA labels, and semantic HTML
- **Contact Form**: Functional contact form with validation
- **Back to Top**: Smooth scroll-to-top button
- **SEO Optimized**: Meta tags and structured data

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── back-to-top.tsx    # Scroll to top button
│   ├── footer.tsx         # Footer component
│   ├── navbar.tsx         # Navigation bar
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── components/sections/   # Page sections
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact form
│   ├── hero.tsx           # Hero section
│   ├── skills.tsx         # Skills section
│   └── work.tsx           # Projects section
└── content/
    └── profile.ts         # Your profile configuration
```

## 🛠️ Customization

### Editing Your Profile

All your personal information, skills, projects, and social links are stored in `src/content/profile.ts`. Simply edit this file to customize your portfolio:

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  about: "Your about text",
  email: "your.email@example.com",
  location: "Your Location",
  
  skills: [
    { name: "Skill Name", level: 90, category: "frontend" },
    // Add more skills...
  ],

  projects: [
    {
      id: 1,
      title: "Project Title",
      description: "Project description",
      tech: ["Tech1", "Tech2"],
      demoUrl: "https://demo-url.com",
      githubUrl: "https://github.com/username/repo",
      featured: true,
    },
    // Add more projects...
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/username", icon: "Github" },
    // Add more social links...
  ],
}
```

### Adding New Projects

1. Open `src/content/profile.ts`
2. Add a new project object to the `projects` array
3. Set `featured: true` for projects you want highlighted
4. Update the `demoUrl` and `githubUrl` links

### Customizing Skills

Skills are automatically categorized by the `category` field:
- `frontend`: Skills will appear in the Frontend section
- `backend`: Skills will appear in the Backend section

The `level` is a percentage (0-100) that controls the progress bar animation.

### Styling

The site uses Tailwind CSS with custom color variables. You can customize colors by modifying:
- `tailwind.config.ts` for theme configuration
- `src/app/globals.css` for custom CSS variables and utilities

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Next.js configuration
   - Click "Deploy"

Your portfolio will be live at a `.vercel.app` domain. You can:
- Add a custom domain in Vercel settings
- Enable automatic deployments on git push
- Configure environment variables if needed

### Other Deployment Options

The site works on any platform that supports Next.js:
- **Netlify**: Connect your GitHub repository
- **Railway**: Deploy with the Next.js template
- **DigitalOcean App Platform**: Use the Next.js builder
- **AWS Amplify**: Connect your GitHub repo

## 🎨 Customization Tips

### Colors

The primary gradient colors are defined throughout the components. To change the theme:
1. Update the gradient classes in components (e.g., `from-blue-500 to-purple-600`)
2. Or modify the CSS variables in `globals.css`

### Fonts

The site uses Inter font by default. To change fonts:
1. Import your preferred font in `layout.tsx`
2. Update the `fontFamily` in `tailwind.config.ts`

### Animations

Animations are powered by Framer Motion. You can:
- Adjust animation durations in component variants
- Modify easing functions for different effects
- Add new animations following the existing pattern

## 📱 Mobile Optimization

The site is fully responsive with:
- Animated hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized spacing for smaller screens
- Proper viewport meta tags

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators for better visibility
- Screen reader friendly content
- Reduced motion support for users who prefer it

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js & Tailwind CSS**
