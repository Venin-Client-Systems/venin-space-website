# ExciseMate Marketing Site

This directory contains the marketing website for ExciseMate, a distillery compliance software solution.

## Contents

- `index.html` - Main landing page with hero section, features, benefits, pricing, and footer

## Design Features

### Visual Design
- Modern, professional design targeting the Australian distillery industry
- Responsive mobile-first layout
- Professional blue/gray color scheme with amber accents
- Smooth animations and transitions
- Self-contained single HTML file with inline CSS

### Sections
1. **Hero Section** - Compelling headline with 60-day free trial CTA
2. **Features Section** - 4 key features (excise tracking, batch management, compliance reporting, multi-distillery)
3. **Benefits Section** - Why distilleries choose ExciseMate
4. **Pricing Section** - 60-day free trial information
5. **Footer** - Links, contact, and legal information

### Performance
- Fast loading with inline critical CSS
- No external dependencies
- Optimized for Core Web Vitals
- Browser-native JavaScript for smooth scrolling

## Deployment

### Local Testing
Simply open `index.html` in a web browser:
```bash
open marketing/index.html
```

Or use a local server:
```bash
cd marketing
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Production Deployment

Deploy to AWS S3 and CloudFront:

1. **Setup AWS Infrastructure** (one-time):
   ```bash
   ./scripts/aws-setup-infrastructure.sh
   ```

2. **Deploy Marketing Site**:
   ```bash
   ./scripts/deploy-marketing-site.sh
   ```

3. **Dry Run** (test without deploying):
   ```bash
   ./scripts/deploy-marketing-site.sh --dry-run
   ```

4. **Deploy without CloudFront invalidation**:
   ```bash
   ./scripts/deploy-marketing-site.sh --skip-cloudfront
   ```

## Customization

### Brand Colors
Update the CSS variables in the `<style>` section:
```css
:root {
    --primary-blue: #1e40af;        /* Primary brand color */
    --accent-amber: #f59e0b;        /* Accent color */
    --gray-900: #111827;            /* Dark text */
}
```

### Content Updates
1. Replace placeholder text in the HTML
2. Update contact information in the footer
3. Add your ABN and contact details
4. Update domain references from excisemate.com to your domain

### Adding Images
To add hero images or feature graphics:
1. Place images in the `marketing/` directory
2. Update `<img>` tags or CSS background-image properties
3. Optimize images before deployment (use WebP format for best performance)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Size

- index.html: ~27 KB (uncompressed)
- Loads in < 1 second on 3G networks
- Perfect Lighthouse scores achievable

## SEO Optimization

The site includes:
- Semantic HTML5 structure
- Meta descriptions
- Responsive design
- Fast loading times
- Accessible markup

### Recommended Additions
- Add favicon.ico
- Add og:image and Twitter card meta tags
- Add structured data (JSON-LD) for organization
- Create sitemap.xml
- Add robots.txt

## Maintenance

### Regular Updates
- Review and update pricing information
- Keep feature descriptions current
- Update statistics and testimonials
- Refresh call-to-action messaging

### Performance Monitoring
- Monitor Core Web Vitals
- Test on real devices
- Check mobile usability
- Verify all links work

## Legal Requirements

Before going live, ensure you have:
- Privacy Policy page
- Terms of Service page
- Cookie consent (if applicable)
- ABN displayed
- Contact information
- GDPR compliance (if targeting EU)

## Support

For technical issues with the marketing site:
- Check AWS CloudFront distribution status
- Verify S3 bucket permissions
- Test DNS configuration
- Clear browser cache

## License

Copyright 2025 ExciseMate. All rights reserved.
