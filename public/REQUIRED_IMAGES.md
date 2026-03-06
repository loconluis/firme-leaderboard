# Required Images for SEO

Place these images in the `/public` directory for complete SEO implementation:

## Social Media Images (CRITICAL)

### Open Graph Images (Facebook, LinkedIn, WhatsApp)
- `og-image.png` - 1200x630px
  - Main social sharing image
  - Should include: Logo, "Firme Challenge" text, fitness theme
  - Dark background with volt green (#d8f200) accents

- `og-image-sm.png` - 600x315px
  - Smaller version for slower connections
  - Same design as og-image.png

### Twitter Card Image
- `twitter-card.png` - 1200x628px
  - Optimized for Twitter's display
  - Similar to OG image but follow Twitter's guidelines

## PWA Icons

### Standard Icons
- `icon-192x192.png` - 192x192px
  - App icon for Android
  - Should be square with logo centered

- `icon-512x512.png` - 512x512px
  - High-res app icon
  - Same design as 192x192

### Windows Tiles
- `tile-70x70.png` - 70x70px
- `tile-150x150.png` - 150x150px
- `tile-310x310.png` - 310x310px
- `tile-310x150.png` - 310x150px

## Favicon
- `favicon.ico` - Multi-size ICO file (16x16, 32x32, 48x48)
- `favicon-16x16.png` - 16x16px
- `favicon-32x32.png` - 32x32px

## Apple Touch Icon
- `apple-touch-icon.png` - 180x180px
  - Used when users add site to iOS home screen

## Screenshots (for PWA manifest)
- `screenshot-mobile.png` - 390x844px
  - Mobile view of the leaderboard

- `screenshot-desktop.png` - 1920x1080px
  - Desktop view of the leaderboard

## Optional Category Icons
- `icon-men.png` - 96x96px
- `icon-women.png` - 96x96px
- `icon-mixed.png` - 96x96px

## Logo
- `logo.png` - High resolution logo (at least 512x512)
  - Used in structured data

## Design Guidelines

1. **Color Scheme**:
   - Background: #0a0a0a (dark)
   - Accent: #d8f200 (volt green)
   - Text: White/Light gray

2. **Typography**:
   - Headlines: Bebas Neue
   - Body: Inter

3. **Style**:
   - Dark theme
   - High contrast for visibility
   - Fitness/athletic aesthetic
   - Bold, energetic design

4. **Content**:
   - Include "Firme Challenge" branding
   - Fitness-related imagery
   - Competitive/ranking visual elements

## Image Generation Tools

- **Figma** - Design and export at correct sizes
- **Canva** - Templates for social media images
- **Squoosh** - Image compression and optimization
- **RealFaviconGenerator** - Generate all favicon sizes
- **PWA Asset Generator** - Generate PWA icons from one image

## Optimization Tips

1. Use PNG for logos and graphics with transparency
2. Use WebP for photos (with PNG fallback)
3. Compress all images (aim for < 100KB for social images)
4. Use descriptive filenames (e.g., "firme-challenge-leaderboard.png")
5. Add proper alt text in code for accessibility
