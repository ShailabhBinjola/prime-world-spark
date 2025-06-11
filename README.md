
# Prime World City - TrueView Realty

A premium single-page marketing website for Prime World City, a luxury apartment project by TrueView Realty. This website is fully frontend-based and requires no backend infrastructure.

## 🏗️ Project Overview

- **Project Name**: Prime World City
- **Developer**: TrueView Realty
- **Property Type**: Luxury Apartments (1, 2 & 3 BHK)
- **Price Range**: ₹45 Lakh to ₹1.2 Crore
- **Status**: Under Construction (Ready by 2026)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (for React development)
- OR any modern web browser (for static hosting)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd prime-world-city
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Development: `http://localhost:5173`
   - The site will auto-reload when you make changes

### Building for Production

```bash
npm run build
```

This creates a `dist/` folder with static files ready for hosting.

## 📁 Project Structure

```
prime-world-city/
├── public/                 # Static assets
│   ├── favicon.ico        # Website icon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── HeroSection.tsx      # Main banner
│   │   ├── GallerySection.tsx   # Property images
│   │   ├── PricingSection.tsx   # Price plans
│   │   ├── FacilitiesSection.tsx # Amenities
│   │   ├── ContactSection.tsx   # Contact form
│   │   ├── WhatsAppFloat.tsx    # WhatsApp button
│   │   └── EnquiryPopup.tsx     # Auto-popup form
│   ├── pages/
│   │   └── Index.tsx      # Main page component
│   ├── index.css         # Global styles & theme
│   └── main.tsx          # App entry point
├── index.html            # HTML template
├── tailwind.config.ts    # Tailwind CSS config
└── README.md            # This file
```

## 🎨 Content Management

### 1. Updating Project Information

**File**: `src/components/HeroSection.tsx`

```typescript
// Update project tagline
<p className="text-xl md:text-2xl text-real-estate-platinum mb-8 font-light">
  Live Smart, Live Prime • Where Luxury Meets Location
</p>

// Update price range
<p className="text-3xl md:text-4xl font-bold text-white">₹45 Lakh*</p>
```

### 2. Updating Pricing Plans

**File**: `src/components/PricingSection.tsx`

```typescript
const apartmentTypes = [
  {
    type: "Smart Studio",
    price: "₹45 Lakh",
    size: "1 BHK",
    area: "580-650 sq.ft",
    features: ["Premium Location", "Modern Kitchen", "Branded Fittings", "Covered Parking"],
    emi: "₹35,000/month",
    popular: false
  },
  // Add more apartment types here
];
```

### 3. Updating Property Images

**File**: `src/components/GallerySection.tsx`

Replace Unsplash URLs with your own property images:

```typescript
const propertyImages = [
  {
    id: 1,
    url: `https://your-domain.com/images/property1.jpg`, // Replace with your image
    title: "Luxury Living Spaces",
    description: "Spacious 2 & 3 BHK apartments with premium interiors",
    category: "Interior"
  },
  // Add more images
];
```

**For local images:**
1. Place images in `public/images/` folder
2. Update URLs to `/images/your-image.jpg`

### 4. Updating Amenities/Facilities

**File**: `src/components/FacilitiesSection.tsx`

```typescript
const premiumAmenities = [
  {
    icon: Waves, // Import from lucide-react
    title: "Swimming Pool",
    description: "Temperature-controlled pool with kids' section and deck area"
  },
  // Add more amenities
];
```

### 5. Updating Contact Information

**File**: `src/components/ContactSection.tsx`

```typescript
// Update phone number
<a href="tel:+917721873487" className="font-semibold text-lg">
  +91 77218 73487  // Replace with your number
</a>

// Update email
<a href="mailto:info@trueviewrealty.com" className="font-semibold">
  info@trueviewrealty.com  // Replace with your email
</a>
```

**Also update WhatsApp number in:**
- `src/components/WhatsAppFloat.tsx`
- `src/components/EnquiryPopup.tsx`

```typescript
const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
// Replace 917721873487 with your WhatsApp number
```

### 6. Updating Company Branding

**File**: `src/components/Header.tsx`

```typescript
<h1 className="font-playfair font-bold text-xl text-white">TrueView Realty</h1>
<p className="text-real-estate-platinum text-xs">Premium Properties</p>
```

**File**: `index.html`

```html
<title>Prime World City - TrueView Realty | Luxury Apartments</title>
<meta name="description" content="Discover Prime World City by TrueView Realty - Premium apartments starting from ₹45 Lakh to ₹1.2 Cr with world-class amenities" />
```

## 🌐 Hosting Instructions

### Free Hosting Options

#### 1. GitHub Pages (Free)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

3. **Update base path** (if needed)
   
   **File**: `vite.config.ts`
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     plugins: [react()],
   })
   ```

4. **Build and deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

Your site will be available at: `https://yourusername.github.io/your-repo-name`

#### 2. Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `dist/` folder
   - Or connect your GitHub repo for auto-deploy

#### 3. Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Custom Domain Setup

1. **Purchase domain** from any registrar (GoDaddy, Namecheap, etc.)

2. **Configure DNS** (example for Netlify):
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add A record: `@` → `75.2.60.5`

3. **Update hosting platform**
   - Add custom domain in hosting platform settings
   - Wait for SSL certificate (usually automatic)

## ⚡ Performance Optimization

### Image Optimization

1. **Use WebP format** for faster loading
2. **Compress images** to under 500KB each
3. **Use responsive images**:
   ```html
   <img 
     src="image-800w.webp" 
     srcset="image-400w.webp 400w, image-800w.webp 800w"
     loading="lazy"
     alt="Property description"
   />
   ```

### Code Optimization

1. **Bundle analysis**
   ```bash
   npm run build -- --analyze
   ```

2. **Remove unused dependencies**
   ```bash
   npm uninstall unused-package
   ```

3. **Enable gzip compression** (hosting platform usually handles this)

### Performance Targets
- **Lighthouse Score**: 90+ (all categories)
- **First Load**: Under 3 seconds
- **Image Loading**: Lazy loading enabled
- **Mobile Performance**: Fully responsive

## 🔧 Customization

### Theme Colors

**File**: `src/index.css`

```css
:root {
  --real-estate-navy: #0F1B2B;      /* Primary dark color */
  --real-estate-gold: #D4AF37;      /* Accent gold color */
  --real-estate-platinum: #E5E4E2;   /* Light accent */
  --real-estate-champagne: #F7E7CE;  /* Background accent */
}
```

**File**: `tailwind.config.ts`

```typescript
colors: {
  'real-estate': {
    'navy': '#0F1B2B',
    'gold': '#D4AF37',
    'platinum': '#E5E4E2',
    'champagne': '#F7E7CE',
  }
}
```

### Fonts

**File**: `index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Animation Speed

**File**: `tailwind.config.ts`

```typescript
animation: {
  'float': 'float 3s ease-in-out infinite',        // Floating elements
  'slide-up': 'slide-up 0.6s ease-out',           // Slide animations
  'scale-in': 'scale-in 0.5s ease-out'            // Scale animations
}
```

## 📱 WhatsApp Integration

### Phone Number Configuration

Update the WhatsApp number in these files:
- `src/components/WhatsAppFloat.tsx`
- `src/components/EnquiryPopup.tsx`
- `src/components/ContactSection.tsx`

```typescript
// Replace with your WhatsApp number (include country code, no + or spaces)
const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
```

### Message Templates

**Enquiry Message**:
```
🏠 Prime World City Enquiry

Name: [Name]
Phone: [Phone]
Email: [Email]
Message: [Message]

Please contact me with details and arrange a site visit.
```

**Brochure Request**:
```
Hello, I would like to download the Prime World City brochure. Please share the details.
```

## 🐛 Troubleshooting

### Common Issues

1. **Site shows blank page**
   - Check console for JavaScript errors
   - Ensure all image URLs are valid
   - Verify base path in `vite.config.ts`

2. **Images not loading**
   - Check file paths (case-sensitive)
   - Ensure images are in `public/` folder
   - Use relative paths: `/images/photo.jpg`

3. **WhatsApp not working**
   - Verify phone number format (no spaces, include country code)
   - Test WhatsApp URL manually
   - Check if WhatsApp is installed on mobile

4. **Build fails**
   ```bash
   npm install          # Reinstall dependencies
   npm run build        # Try building again
   ```

5. **Mobile responsiveness**
   - Test on actual devices
   - Use browser dev tools
   - Check Tailwind responsive classes

### Performance Issues

1. **Slow loading**
   - Optimize images (WebP, compression)
   - Enable lazy loading
   - Check hosting platform speed

2. **Large bundle size**
   - Remove unused dependencies
   - Use code splitting
   - Analyze bundle with `npm run build -- --analyze`

## 📞 Support

For technical support or customization requests:
- **Email**: developers@trueviewrealty.com
- **Phone**: +91 77218 73487
- **Documentation**: This README file

## 📄 License

This project is proprietary software for TrueView Realty. All rights reserved.

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Compatibility**: Node.js 16+, Modern Browsers (Chrome 90+, Firefox 88+, Safari 14+)
