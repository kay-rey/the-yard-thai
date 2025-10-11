# Pre-Migration Checklist ✅

## Schema Configuration ✅

- [x] **Price Field**: Number type with 2 decimal places validation
- [x] **Image Alt Text**: Auto-generated from item name (e.g., "Spicy Seafood Rice")
- [x] **Slug Field**: Auto-generated from name (e.g., "spicy-seafood-rice")
- [x] **All Required Fields**: name, price, category, imageAlt, slug
- [x] **Boolean Fields**: spicy, vegetarian, popular with default false
- [x] **Category Dropdown**: All 13 categories properly configured

## Migration Script ✅

- [x] **Price Conversion**: Converts "$12.50" → 12.50 (number)
- [x] **Image Alt Text**: Uses item.name for alt text
- [x] **Slug Generation**: Uses item.id as slug
- [x] **Image Upload**: Handles image uploads to Sanity CDN
- [x] **Error Handling**: Proper try/catch and logging
- [x] **Environment Variables**: Loads from .env.local

## Frontend Integration ✅

- [x] **MenuItem Interface**: Updated to use number for price
- [x] **Price Formatting**: formatPrice() function for $12.50 display
- [x] **GROQ Queries**: All queries include price, imageAlt, slug
- [x] **Components Updated**: menu-item-card.tsx and menu-section.tsx
- [x] **Type Safety**: All TypeScript interfaces match schema

## Build & Linting ✅

- [x] **No Linting Errors**: All code passes ESLint
- [x] **Build Success**: Next.js builds without errors
- [x] **TypeScript**: All types properly defined
- [x] **Scripts Excluded**: Migration scripts don't interfere with build

## Sanity Studio ✅

- [x] **Custom Structure**: Menu items organized by category
- [x] **Full Screen**: No navbar/footer interference
- [x] **Preview Function**: Shows price, category, and badges
- [x] **Field Validation**: Required fields properly validated

## Ready for Migration! 🚀

### What Will Happen:

1. **933 menu items** will be migrated from static data
2. **Images** will be uploaded to Sanity CDN
3. **Prices** will be converted to numbers (12.50)
4. **Alt text** will be set to item names
5. **Slugs** will be generated from item IDs
6. **Categories** will be properly assigned

### After Migration:

- Sanity Studio will have all menu items organized by category
- Frontend will display formatted prices ($12.50)
- Images will load from Sanity CDN
- All data will be editable through Sanity Studio

## Commands to Run:

```bash
# 1. Delete old menu items (if any exist)
pnpm delete-menu

# 2. Run migration
pnpm migrate

# 3. Start dev server to test
pnpm dev
```

## Expected Results:

- ✅ 933 menu items in Sanity Studio
- ✅ All images uploaded and accessible
- ✅ Prices formatted as $12.50
- ✅ Alt text set to item names
- ✅ Slugs generated (spicy-seafood-rice)
- ✅ Categories properly organized
