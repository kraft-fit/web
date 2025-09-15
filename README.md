# KRAFT FIT — Fitness Website

A modern, responsive fitness website for personal training services in Dubai. Built with clean HTML, CSS, and JavaScript focusing on performance, accessibility, and SEO.

## 🏋️ About

KRAFT FIT offers comprehensive personal training services including strength training, weight loss, muscle gain, rehabilitation, Zumba, cross training, and nutrition coaching with both male and female trainers available.

## ✨ Features

- **Responsive Design**: Mobile-first approach with 1x6, 2x3, and 3x2 grid layouts
- **Modern UI**: Clean design with navy (#142245) and orange (#f57042) brand colors
- **Accessibility**: WCAG AA compliant with proper contrast ratios and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient CSS
- **SEO Optimized**: Meta tags, structured data, and semantic markup
- **Interactive Elements**: Smooth animations, hover effects, and form validation

## 🎨 Brand Guidelines

The website follows strict brand guidelines defined in `AGENT.md`:

- **Primary Colors**: Navy (#142245), Orange (#f57042), White (#ffffff)
- **Typography**: League Spartan for headings, Montserrat for body text
- **Voice**: Motivational, bold, energetic, no-nonsense
- **Imagery**: Dark, moody gym atmospheres with professional fitness photography

## 🚀 Quick Start

### Development Server

```bash
# Start local development server
make serve
```

This runs a Python HTTP server on port 8000. View at `http://localhost:8000`

### Manual Setup

```bash
# Clone and navigate to project
cd site/web

# Start any HTTP server
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

## 📁 Project Structure

```
site/web/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── Makefile                # Development commands
├── AGENT.md                # Brand guidelines for AI agents
├── README.md               # This file
└── assets/
    ├── logo-icon.png       # Square logo for favicons
    ├── logo-word.png       # Horizontal wordmark
    ├── logo-word-web.png   # Web-optimized wordmark
    ├── strength-training.jpg
    ├── muscle-gain.jpg
    ├── weight-loss.jpg
    ├── rehab-injury-care.jpg
    ├── zumba-training.jpg
    ├── mindset-coaching.jpg
    └── gym-[1-6].jpg       # Original gym photos
```

## 🎯 Services Offered

1. **Strength & Functional** - Compound lifts and movement patterns
2. **Muscle Gain** - Hypertrophy and progressive overload
3. **Weight Loss & Toning** - Conditioning and nutrition coaching
4. **Rehab & Injury Care** - Joint-friendly corrective work
5. **Zumba & Cross Training** - High-energy cardio sessions
6. **Mindset & Motivation** - Discipline and consistency coaching

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1023px (2 column grid)
- **Desktop**: ≥ 1024px (3 column grid)

## 🎨 Design System

### Colors
```css
--accent: #f57042;    /* Orange */
--navy: #142245;      /* Brand navy */
--surface: #ffffff;   /* Light backgrounds */
--surface-2: #f6f7fb; /* Secondary backgrounds */
--text: #0b0b0b;      /* Primary text */
--muted: #334155;     /* Secondary text */
```

### Typography
- **Headings**: League Spartan, uppercase, 800 weight
- **Body**: Montserrat, 300-600 weight
- **Letter Spacing**: Tight (-0.01em to -0.02em) for headings

### Components
- **Buttons**: Orange primary, white secondary with hover animations
- **Cards**: White background with subtle borders and shadows
- **Icons**: Font Awesome 6.4.0 for consistent iconography

## 📞 Contact Information

- **Phone**: +971 50 313 7376, +971 56 792 8788
- **Email**: kraftfitonline@gmail.com
- **Website**: www.kraft-fit.com
- **Instagram**: @kraftfit.dxb
- **Facebook**: kraftfit

## 🔧 Technical Details

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Custom properties, Grid, Flexbox, modern features
- **JavaScript**: Vanilla JS for navigation and form handling
- **Fonts**: Google Fonts (League Spartan, Montserrat)
- **Icons**: Font Awesome 6.4.0
- **Images**: Optimized JPGs from Unsplash (MIT licensed)
- **SEO**: Open Graph, Twitter Cards, JSON-LD structured data

## 🚀 Performance

- **Images**: Lazy loading, optimized sizes (800px width)
- **CSS**: Single file, optimized selectors
- **Fonts**: Preconnected to Google Fonts
- **JavaScript**: Minimal, deferred loading
- **HTML**: Minified structure, proper caching headers

## 📈 SEO Features

- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph and Twitter Card tags
- JSON-LD structured data for business
- FAQ schema markup
- Proper heading hierarchy (h1-h3)
- Descriptive alt text for all images

## 🎯 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

All code is proprietary. Images sourced from Unsplash under their license terms.

---

**Built with ❤️ for KRAFT FIT Dubai**