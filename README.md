<div align="center">
  <img src="public/images/logo/FullLogo_Transparent_NoBuffer.png" alt="The Yard Thai Cuisine Logo" width="200" height="auto" />
  
  # The Yard Thai Cuisine Website
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Sanity](https://img.shields.io/badge/Sanity-4-FF3E00?style=for-the-badge&logo=sanity)](https://sanity.io/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  
  *A modern, responsive website for The Yard Thai Cuisine restaurant located in Agoura Hills, California*
</div>

---

A modern, responsive website for The Yard Thai Cuisine restaurant located in Agoura Hills, California. Built with Next.js 15.5.3, TypeScript, and Tailwind CSS, featuring a comprehensive menu system powered by Sanity CMS, real-time store hours, and optimized performance.

## 🎯 Project Status

**Current Version**: 0.1.0  
**Last Updated**: December 2024  
**Status**: Production Ready ✅  
**Live Website**: [https://www.theyardthai.com/](https://www.theyardthai.com/)

### Recent Updates

- ✅ **Sanity CMS Integration**: Complete headless CMS implementation
- ✅ **shadcn/ui Components**: Modern component library integration
- ✅ **Turbopack Support**: Faster development builds
- ✅ **TypeScript 5**: Latest type safety features
- ✅ **Tailwind CSS 4**: Updated styling framework
- ✅ **Performance Optimization**: Image optimization and caching
- ✅ **SEO Enhancement**: Structured data and meta tags

## 🌟 Features

### Core Functionality

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Real-time Store Status**: Dynamic store hours with live open/closed status indicators
- **Comprehensive Menu**: Interactive menu with categories, dietary indicators, and high-quality food photography
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph integration
- **Performance Optimized**: Server-side rendering, image optimization, and efficient loading

### Restaurant Features

- **Menu Categories**: Appetizers, Soups, Salads, Noodles, Curries, Stir-fried, Rice, Specialties, Grilled, Noodle Soups, Drinks, Desserts, and Sides
- **Dietary Indicators**: Vegetarian, spicy, and popular item badges
- **Store Information**: Location, hours, contact details, and real-time status
- **Visual Appeal**: High-quality food photography and Thai-inspired design

### Technical Features

- **Modern Stack**: Next.js 15.5.3 with App Router and Turbopack, React 19.1.0, TypeScript 5
- **Headless CMS**: Sanity.io 4 integration with custom schema and studio
- **Content Management**: Non-technical user-friendly content editing interface
- **Styling**: Tailwind CSS with custom Thai-inspired color palette
- **UI Components**: shadcn/ui components with custom styling
- **Icons**: Lucide React icons for consistent iconography
- **Analytics**: Vercel Analytics integration
- **Fonts**: Custom font loading with Google Fonts and local fonts

## 🎨 Design System

### Color Palette

The website uses a carefully crafted Thai-inspired color scheme:

- **Primary (Golden Yellow)**: `#F4D03F` - Primary buttons, links, and important headings
- **Secondary (Warm Amber)**: `#F39C12` - Secondary buttons and highlight backgrounds
- **Accent (Terracotta)**: `#E67E22` - Special tags, icons, and decorative elements
- **Neutral (Light Cream)**: `#FEFBF6` - Background color for better readability
- **Text (Charcoal)**: `#8B4513` - All text content

### Typography

- **Primary Font**: Lora (serif) for headings and elegant text
- **Secondary Font**: Nunito Sans (sans-serif) for body text and UI elements
- **Accent Font**: Coolvetica (local) for special branding elements
- **Decorative Font**: Parisienne for special decorative text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/the-yard-thai.git
   cd the-yard-thai
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Live Website

🌐 **Production Site**: [https://www.theyardthai.com/](https://www.theyardthai.com/)

The live website showcases the complete implementation with:

- Real-time store hours and status
- Full menu with Sanity CMS integration
- Optimized performance and SEO
- Mobile-responsive design

### Available Scripts

```bash
# Development server with Turbopack (faster builds)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint for code quality
pnpm lint

# Sanity CMS Management
pnpm migrate          # Migrate existing menu data to Sanity
pnpm delete-menu     # Delete all menu items from Sanity (cleanup)
```

### Development Workflow

1. **Start Development**: `pnpm dev` - Runs with Turbopack for faster builds
2. **Content Management**: Access Sanity Studio at `/studio` for menu management
3. **Code Quality**: `pnpm lint` ensures consistent code style
4. **Build & Deploy**: `pnpm build` creates optimized production build

### Key Dependencies

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Sanity 4** - Headless CMS with real-time collaboration
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library
- **Vercel Analytics** - Performance monitoring

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page
│   ├── studio/            # Sanity Studio integration
│   │   └── [[...tool]]/   # Catch-all route for Sanity Studio
│   ├── fonts/             # Local font files
│   ├── robots.ts          # SEO robots configuration
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── favicon.ico        # Site favicon
│   ├── icon.png           # App icon
│   └── opengraph-image.webp # Open Graph image
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   │   ├── badge.tsx      # Badge component
│   │   ├── button.tsx     # Button component
│   │   ├── card.tsx       # Card component
│   │   ├── collapsible.tsx # Collapsible component
│   │   └── dialog.tsx     # Dialog component
│   ├── hero-section.tsx   # Homepage hero section
│   ├── about-section.tsx  # About restaurant section
│   ├── featured-section.tsx # Featured menu items
│   ├── menu-section.tsx   # Menu display component
│   ├── menu-item-card.tsx # Individual menu item card
│   ├── navbar.tsx         # Navigation component
│   └── footer.tsx         # Footer component
├── data/                  # Static data (legacy)
│   ├── categories.ts      # Menu categories
│   └── menu-items.ts      # Complete menu data
├── lib/                   # Utility functions
│   ├── menu-data.ts       # Menu data types and utilities
│   ├── price-format.ts    # Price formatting utilities
│   ├── store-hours.ts     # Store hours and status logic
│   ├── structured-data.ts # SEO structured data
│   ├── utils.ts           # General utilities
│   └── sanity/            # Sanity CMS utilities
│       ├── config.ts      # Sanity configuration
│       ├── queries.ts     # GROQ queries
│       ├── client.ts      # Sanity client
│       ├── image.ts       # Image utilities
│       └── live.ts        # Live preview utilities
├── sanity/                # Sanity CMS configuration
│   ├── schemaTypes/       # Content schemas
│   │   ├── index.ts       # Schema exports
│   │   └── menuItem.ts    # Menu item schema definition
│   ├── env.ts            # Sanity environment configuration
│   ├── structure.ts       # Studio structure configuration
│   └── lib/               # Sanity utilities
│       ├── client.ts      # Sanity client
│       ├── image.ts       # Image utilities
│       └── live.ts        # Live preview utilities
└── scripts/               # Utility scripts
    ├── migrate-to-sanity.ts # Data migration script
    └── delete-all-menu-items.ts # Cleanup script
```

## 🍽️ Menu System

The website features a comprehensive menu system with:

- **12 Categories**: From appetizers to desserts
- **100+ Menu Items**: Each with descriptions, prices, and dietary indicators
- **High-Quality Images**: Professional food photography for visual appeal
- **Dietary Information**: Vegetarian, spicy, and popular item indicators
- **Responsive Design**: Optimized for all screen sizes

### Menu Categories

1. **Appetizers** - Starters and small plates
2. **Soups** - Traditional Thai soups
3. **Salads** - Fresh Thai salads
4. **Noodles** - Classic noodle dishes
5. **Curries** - Authentic Thai curries
6. **Stir-Fried** - Wok-fried specialties
7. **Rice** - Fried rice variations
8. **Special** - House specialties
9. **Grilled** - Grilled meats and seafood
10. **Noodle Soups** - Soup-based noodle dishes
11. **Drinks** - Beverages and Thai drinks
12. **Desserts** - Traditional Thai desserts
13. **Sides** - Accompaniments and extras

## 🎛️ Content Management System (Sanity.io)

### Headless CMS Integration

This project features a sophisticated **Sanity.io** headless CMS implementation, demonstrating full-stack development capabilities:

#### **Custom Schema Design**

- **Menu Item Schema**: Comprehensive data model with validation
- **Category Management**: 13 predefined categories with dropdown selection
- **Image Handling**: Sanity CDN integration with automatic optimization
- **Content Validation**: Required fields, price validation, and data integrity
- **Slug Generation**: Auto-generated URL-friendly identifiers

#### **Sanity Studio Features**

- **Embedded Studio**: Accessible at `/studio` route for content management
- **Category Organization**: Visual menu organization with emoji icons
- **Rich Previews**: Live preview of menu items with images and metadata
- **Bulk Management**: Efficient content editing workflows
- **User-Friendly Interface**: Non-technical users can manage content easily

#### **Technical Implementation**

```typescript
// Custom Schema with Validation
defineField({
	name: "price",
	title: "Price",
	type: "number",
	validation: (Rule) => Rule.required().min(0).precision(2),
}),
	// Category Selection with Options
	defineField({
		name: "category",
		title: "Category",
		type: "string",
		options: {
			list: [
				{ title: "Appetizers", value: "appetizers" },
				{ title: "Soups", value: "soups" },
				// ... 13 categories total
			],
			layout: "dropdown",
		},
	});
```

#### **Performance Optimizations**

- **ISR (Incremental Static Regeneration)**: Pages regenerate when content changes
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **CDN Integration**: Global content delivery for fast loading
- **Smart Caching**: Optimized caching strategies for performance

#### **Migration & Data Management**

- **Automated Migration**: Scripts to transfer existing menu data to Sanity
- **Image Upload**: Batch upload of existing food photography
- **Data Preservation**: Maintains all existing relationships and metadata
- **Environment Management**: Secure API token handling

### CMS Architecture Benefits

- **Scalability**: Easy to add new content types and fields
- **Developer Experience**: Type-safe content queries with GROQ
- **Content Editor Experience**: Intuitive interface for non-technical users
- **Performance**: Optimized content delivery and caching
- **Flexibility**: Easy to extend with additional content types

## 🕒 Store Hours & Status

The website includes real-time store status functionality:

- **Live Status**: Open, Closed, or Closing Soon indicators
- **Dynamic Hours**: Different hours for weekdays and weekends
- **Pacific Timezone**: Accurate timezone handling for Agoura Hills
- **Visual Indicators**: Color-coded status with appropriate messaging

### Store Hours

- **Monday-Thursday**: 11:00 AM - 2:30 PM, 4:00 PM - 8:15 PM
- **Friday-Saturday**: 11:00 AM - 2:30 PM, 4:00 PM - 8:30 PM
- **Sunday**: 11:30 AM - 2:30 PM, 4:00 PM - 8:15 PM

## 🔧 Technical Implementation

### Performance Optimizations

- **Server-Side Rendering**: Fast initial page loads
- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Custom font loading with display swap
- **Bundle Optimization**: Tree shaking and code splitting
- **Turbopack**: Fast development and build times

### SEO Features

- **Structured Data**: Restaurant schema markup for search engines
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Accessibility

- **Semantic HTML**: Proper HTML5 semantic elements
- **ARIA Labels**: Screen reader accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Alt Text**: Descriptive alt text for all images

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: Link your repository to Vercel
3. **Configure Environment Variables**: Set up Sanity credentials
4. **Deploy**: Automatic deployments with each push

**Environment Variables Required:**

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
```

### Deployment Features

- **Automatic Deployments**: Every push to main branch triggers deployment
- **Preview Deployments**: Pull requests get preview URLs
- **Edge Functions**: Global CDN for optimal performance
- **Analytics**: Built-in performance monitoring
- **Custom Domain**: Easy domain configuration

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify** - Static site hosting with serverless functions
- **AWS Amplify** - Full-stack deployment with AWS integration
- **Railway** - Simple deployment with database support
- **DigitalOcean App Platform** - Container-based deployment

## 🛠️ Development

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (if configured)
- **Conventional Commits**: Standardized commit messages

### Content Management with Sanity

1. **Access Studio**: Navigate to `/studio` in your browser
2. **Add Menu Items**: Use the intuitive interface to create new items
3. **Upload Images**: Drag and drop images with automatic optimization
4. **Set Categories**: Choose from predefined categories with validation
5. **Manage Content**: Edit, delete, and organize menu items efficiently

### Adding New Menu Items (Legacy)

1. Edit `src/data/menu-items.ts`
2. Add the new item with proper structure
3. Include image path if available
4. Set appropriate category and dietary indicators

### Customizing Colors

1. Edit `src/app/globals.css`
2. Update CSS custom properties
3. Ensure accessibility compliance

### Sanity CMS Setup

1. **Environment Variables**: Set up `.env.local` with Sanity credentials
2. **Migration**: Run `pnpm migrate` to transfer existing data
3. **Studio Access**: Visit `/studio` to manage content
4. **Schema Customization**: Modify `src/sanity/schemaTypes/menuItem.ts`

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Why MIT License?

This project is open-sourced to showcase modern web development skills and best practices. The MIT license allows others to learn from and build upon this work while maintaining attribution.

## 📞 Contact

**The Yard Thai Cuisine**

- **Address**: 5889 Kanan Rd, Agoura Hills, CA
- **Phone**: (818) 532-7272
- **Website**: [https://www.theyardthai.com/](https://www.theyardthai.com/)
