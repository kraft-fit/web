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
- **Analytics**: Google Tag Manager with comprehensive event tracking (15+ event types)

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
├── gtm-events.js           # Google Tag Manager event tracking
├── Makefile                # Development commands
├── AGENTS.md               # Brand guidelines for AI agents
├── README.md               # This file
├── GTM-QUICKSTART.md       # GTM quick setup guide
├── GTM-SETUP.md            # Complete GTM documentation
├── GTM-IMPLEMENTATION.md   # GTM implementation summary
├── GTM-TESTING.md          # GTM testing checklist
└── assets/
    ├── logo-icon.png       # Square logo for favicons
    ├── logo-word.png       # Horizontal wordmark
    ├── logo-word-web.png   # Web-optimized wordmark
    ├── brand.md            # Brand assets documentation
    ├── content.md          # Content guidelines
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
- **Analytics**: Google Tag Manager (GTM-K458C47C) with GA4 event tracking
- **Fonts**: Google Fonts (League Spartan, Montserrat)
- **Icons**: Font Awesome 6.4.0
- **Images**: Optimized JPGs from Unsplash (MIT licensed)
- **SEO**: Open Graph, Twitter Cards, JSON-LD structured data

## 📊 Google Tag Manager & Analytics

The site includes comprehensive event tracking via Google Tag Manager:

### Container Information
- **GTM Container ID**: `GTM-K458C47C`
- **Implementation**: Head + body tags installed
- **Event Script**: `gtm-events.js`

### Tracked Events (15+ types)
- Page views with enhanced metadata
- CTA button clicks (primary/secondary)
- WhatsApp contact clicks
- Form interactions (start, field completion, submit, success/error)
- Service card clicks
- Navigation clicks (header/footer)
- Social media clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Section views (when 50% visible)
- Time on page (30s, 1m, 2m, 5m)
- Mobile menu toggles
- External link clicks
- JavaScript errors
- User engagement scoring

### Quick Start
1. See `GTM-QUICKSTART.md` for setup instructions
2. Configure GA4 property and get Measurement ID
3. Create GTM tags for events (see `GTM-SETUP.md`)
4. Test using GTM Preview Mode
5. Publish and monitor

### Testing
- Open browser console to see event logs
- Use `GTM-TESTING.md` checklist
- Verify with GTM Preview Mode
- Check GA4 DebugView for real-time events

### Documentation
- **GTM-QUICKSTART.md**: Quick setup guide
- **GTM-SETUP.md**: Complete technical reference
- **GTM-IMPLEMENTATION.md**: Implementation summary
- **GTM-TESTING.md**: Testing checklist

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