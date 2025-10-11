# Sanity IO Menu Integration Setup

## Overview

This project now uses Sanity IO as a headless CMS for managing menu items. Non-technical users can easily add, edit, and manage menu content through the Sanity Studio interface.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01

# Sanity API Tokens (for migration and ISR revalidation)
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_API_WRITE_TOKEN=your_write_token_here
```

### 2. Get Your Sanity Project Details

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Find your "The Yard Thai Site" project
3. Copy the Project ID and Dataset name
4. Create API tokens:
   - **Read Token**: For fetching data (used in production)
   - **Write Token**: For migration script (temporary use)

### 3. Run Migration Script

After setting up environment variables, run the migration script to transfer all existing menu data:

```bash
pnpm migrate
```

This will:

- Upload all menu images to Sanity's CDN
- Create menu item documents in Sanity
- Preserve all existing data and relationships

### 4. Access Sanity Studio

Once migration is complete, you can access the Sanity Studio at:

- **Local**: http://localhost:3000/studio
- **Production**: https://yourdomain.com/studio

## Studio Features

### Organized Menu Management

- **Category-Based Organization**: Menu items are organized by category (Appetizers, Soups, Salads, etc.)
- **Visual Categories**: Each category has an emoji icon for easy identification
- **Quick Access**: "All Menu Items" view for seeing everything at once
- **Alphabetical Sorting**: Items within each category are sorted alphabetically

### Menu Item Management

- **Add New Items**: Create new menu items with images, descriptions, and pricing
- **Edit Existing**: Modify any menu item details
- **Image Management**: Upload and manage images with automatic optimization
- **Category Assignment**: Assign items to appropriate categories
- **Special Tags**: Mark items as spicy, vegetarian, or popular
- **Rich Previews**: See item details, price, category, and special tags in the list view

### Content Structure

Each menu item includes:

- **Name**: Item title
- **Description**: Detailed description
- **Price**: Formatted price (e.g., "$12.00")
- **Category**: Dropdown selection from predefined categories
- **Image**: High-quality image with alt text
- **Tags**: Spicy, Vegetarian, Popular flags
- **Slug**: Auto-generated URL-friendly identifier

## Technical Details

### Architecture

- **Frontend**: Next.js 15 with App Router
- **CMS**: Sanity IO with embedded Studio
- **Images**: Sanity CDN with automatic optimization
- **Caching**: ISR (Incremental Static Regeneration) for performance

### File Structure

```
src/
├── app/
│   └── studio/[[...tool]]/page.tsx  # Embedded Sanity Studio
├── lib/
│   ├── menu-data.ts                # Updated to fetch from Sanity
│   └── sanity/
│       ├── config.ts               # Sanity configuration
│       ├── queries.ts              # GROQ queries
│       └── image.ts                # Image URL builder
└── sanity/
    ├── schemaTypes/
    │   └── menuItem.ts             # Menu item schema
    └── lib/
        └── client.ts               # Sanity client setup
```

### Performance Features

- **ISR**: Pages regenerate when content changes
- **Image Optimization**: Automatic resizing and WebP conversion
- **CDN**: Global content delivery for fast loading
- **Caching**: Smart caching strategies for optimal performance

## Troubleshooting

### Common Issues

1. **Migration Fails**: Check API tokens and project permissions
2. **Images Not Loading**: Verify CORS settings in Sanity dashboard
3. **Studio Not Accessible**: Ensure environment variables are set correctly

### Support

- Check Sanity documentation: https://sanity.io/docs
- Review Next.js integration: https://github.com/sanity-io/next-sanity
- Contact development team for technical issues

## Next Steps

1. Complete environment setup
2. Run migration script
3. Test Studio functionality
4. Train content managers on Studio usage
5. Deploy to production
