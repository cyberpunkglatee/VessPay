# VessPay Website Maintenance Guide

## Adding New Products
1. Create a new folder in `src/app/products/[product-name]`.
2. Create a `page.js` file inside that folder.
3. Use the existing product page templates (e.g., `src/app/products/wallet/page.js`) as a reference.
4. Add the product to the list in `src/app/products/page.js`.

## Updating Content
- **Homepage**: Edit `src/app/page.js` and the corresponding components in `src/components/`.
- **Security Page**: Edit `src/app/security/page.js`.
- **Company Page**: Edit `src/app/company/page.js`.
- **Menus**: Update `src/components/Navbar.js` and `src/components/Footer.js`.

## Deployment
This project is optimized for deployment on Vercel.
1. Push the code to a Git repository (GitHub/GitLab).
2. Connect the repository to Vercel.
3. The build command `npm run build` will run automatically.

## Performance Tuning
- Verify images are optimized (use `next/image` if adding heavy assets).
- Run `npm run lint` before committing to catch issues.
