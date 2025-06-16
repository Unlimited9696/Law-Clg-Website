# SEO Optimization Guide for SSNLC Website

Follow these steps after deploying your website to ensure it's properly indexed by search engines:

## 1. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://ssnlc.in)
3. Verify ownership using one of these methods:
   - HTML file: Upload the `google-site-verification.html` file we created to your server root
   - HTML tag: Replace `ADD_YOUR_VERIFICATION_CODE_HERE` in the layout.js file with the code provided by Google
   - DNS record: Add a TXT record to your domain's DNS settings

4. Once verified, submit your sitemap:
   - Go to "Sitemaps" section
   - Enter `sitemap.xml` and click "Submit"
   - Also submit `api/sitemap` for the dynamic sitemap

## 2. Update Structured Data

1. Open `client/src/app/layout.js`
2. Update the structured data script with your actual:
   - Social media links
   - Address details
   - Phone number
   - Email address
   - Founding date
   - Course offerings

## 3. Optimize Page Metadata

Ensure each page has proper metadata by:
1. Creating unique titles and descriptions for each page
2. Including relevant keywords in the content
3. Using proper heading structure (H1, H2, etc.)

## 4. Image Optimization

1. Ensure all images have proper `alt` attributes
2. Optimize image sizes for faster loading
3. Use descriptive filenames for images

## 5. Performance Optimization

1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on your site
2. Address any performance issues identified
3. Implement suggested optimizations

## 6. Monitor and Improve

1. Regularly check Google Search Console for:
   - Indexing issues
   - Search performance
   - Mobile usability
   - Core Web Vitals

2. Set up Google Analytics to track user behavior
3. Make improvements based on the data collected

## 7. Social Media Integration

1. Add Open Graph and Twitter Card meta tags (already implemented)
2. Ensure social sharing preview looks good
3. Test using [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## 8. Local SEO (if applicable)

1. Create a Google Business Profile
2. Ensure NAP (Name, Address, Phone) consistency across the web
3. Get listed in relevant educational directories

## 9. Regular Content Updates

1. Regularly update the announcements section
2. Add new events and news items
3. Keep all information current and relevant

By following these steps, your website will be properly optimized for search engines and more likely to appear in relevant search results. 