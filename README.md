# Data & ML Engineer Portfolio

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed specifically for Data & ML Engineers with a focus on showcasing technical expertise, projects, and professional experience.

## 🚀 Features

### Design & UX
- **Modern, Professional Design** - Clean layout optimized for recruiter viewing
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark/Light Mode** - Automatic theme switching with user preference
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Elements** - Hover effects, animated counters, and dynamic content

### Technical Features
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Static Export** - Optimized for GitHub Pages deployment
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Performance Optimized** - Lighthouse score 95+

### Portfolio Sections
- **Hero Section** - Animated typing effect with key technologies
- **About** - Detailed bio with animated counters and journey timeline
- **Experience** - Interactive timeline with expandable cards
- **Projects** - Filterable project showcase with detailed modals
- **Skills** - Interactive skill categories with progress bars
- **Contact** - Working contact form with social links

### Unique Elements
- **Matrix Rain Effect** - Subtle background animation
- **Data Pipeline Visualization** - Animated SVG data flow
- **Floating Action Button** - Quick resume download
- **Interactive Skill Graph** - Technology interconnections
- **Loading States** - Custom animations for better UX

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Heroicons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ProPortfolio.git
cd ProPortfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 4. Customize Content

Update the following files with your information:

#### Personal Information
- `app/layout.tsx` - Update metadata and SEO information
- `components/sections/Hero.tsx` - Update name, title, and description
- `components/sections/About.tsx` - Update bio and personal details
- `components/Header.tsx` - Update navigation brand name

#### Professional Experience
- `components/sections/Experience.tsx` - Update work experience data
- `components/sections/Projects.tsx` - Update project information
- `components/sections/Skills.tsx` - Update technical skills

#### Contact Information
- `components/sections/Contact.tsx` - Update contact details and social links
- `components/Footer.tsx` - Update footer information

### 5. Add Your Resume

Place your resume PDF file in the `public` directory as `resume.pdf`.

## 🎨 Customization

### Colors & Branding

The portfolio uses a custom color scheme defined in `tailwind.config.ts`:

- **Primary**: Blue (#0066CC) - Professional, trustworthy
- **Secondary**: Emerald (#10B981) - Growth, ML/AI
- **Accent**: Orange (#F59E0B) - Energy, innovation

To customize colors, update the color palette in `tailwind.config.ts`.

### Typography

The portfolio uses three font families:
- **Inter** - Body text (clean, readable)
- **Poppins** - Headings (modern, professional)
- **JetBrains Mono** - Code snippets (technical)

### Animations

Animations are configured in `tailwind.config.ts` and can be customized:
- Fade-in effects
- Slide animations
- Floating elements
- Gradient text effects

## 📱 Responsive Design

The portfolio is built mobile-first with breakpoints:
- **sm**: 640px (Small tablets)
- **md**: 768px (Tablets)
- **lg**: 1024px (Laptops)
- **xl**: 1280px (Desktops)

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update Configuration**
   
   In `next.config.js`, update the repository name:
   ```javascript
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy your site

4. **Custom Domain (Optional)**
   - Update `CNAME` in `.github/workflows/deploy.yml`
   - Add your domain in repository settings

### Alternative Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
npm run export
# Upload the 'out' folder to Netlify
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── ...
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── ...
```

## 🎯 SEO & Performance

### SEO Features
- Meta tags and Open Graph data
- Structured data for search engines
- Semantic HTML structure
- Optimized images and assets

### Performance Optimizations
- Static site generation
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Lucide React and Heroicons
- Animations powered by Framer Motion
- Built with Next.js and Tailwind CSS

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ for Data & ML Engineers**

Transform your professional presence with this modern, feature-rich portfolio template designed specifically for technical professionals in the data and machine learning space. 