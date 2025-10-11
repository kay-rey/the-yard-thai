# Deployment Guide for Sanity Integration

## 🚀 **Vercel Deployment Fix**

The build was failing due to Turbopack compatibility issues with Sanity. This has been fixed by:

1. **Disabled Turbopack for builds** - `package.json` now uses `next build` instead of `next build --turbopack`
2. **Added Vercel config** - `vercel.json` ensures proper build commands
3. **Kept Turbopack for dev** - Still fast development with `pnpm dev --turbopack`

## 🔧 **Environment Variables for Vercel**

Add these environment variables in your Vercel dashboard:

### **Required Variables:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

### **Optional (for ISR if needed later):**

```
SANITY_API_READ_TOKEN=your_read_token
```

## 🎯 **CORS Configuration in Sanity**

In your Sanity project dashboard, add these CORS origins:

### **Production:**

- **Origin:** `https://theyardthai.com`
- **Credentials:** ✅ Checked
- **Description:** Production website

### **Development:**

- **Origin:** `http://localhost:3000`
- **Credentials:** ✅ Checked
- **Description:** Local development

## 📋 **Deployment Steps**

1. **Push changes to GitHub:**

   ```bash
   git add .
   git commit -m "fix: disable turbopack for production builds"
   git push origin main
   ```

2. **Vercel will automatically deploy** (if connected to GitHub)

3. **Set environment variables** in Vercel dashboard

4. **Configure CORS** in Sanity dashboard

5. **Test the deployment:**
   - Visit `https://theyardthai.com/menu`
   - Visit `https://theyardthai.com/studio`

## ✅ **Expected Results**

After deployment:

- ✅ **Menu page loads** with Sanity data
- ✅ **Studio accessible** at `/studio`
- ✅ **Images load** from Sanity CDN
- ✅ **No build errors** (Turbopack issue resolved)

## 🔄 **Future Updates**

When you update menu items:

1. **Edit in Sanity Studio** at `https://theyardthai.com/studio`
2. **Redeploy website** (Vercel will auto-deploy on git push)
3. **Changes go live** automatically

## 🐛 **Troubleshooting**

If build still fails:

1. Check environment variables are set correctly
2. Verify CORS origins are configured
3. Check Vercel build logs for specific errors
4. Ensure all Sanity dependencies are properly installed
