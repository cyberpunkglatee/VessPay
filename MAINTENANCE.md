# VessPay Website Maintenance Guide

## Adding New Content
- **Audiences**: Add new target groups in `src/app/audiences/page.js`.
- **Features**: Add new features in `src/app/features/page.js`.
- **Pricing**: Update fee tables in `src/app/pricing/page.js`.
- **Homepage**: Edit `src/app/page.js` and the corresponding components in `src/components/`.
- **Menus**: Update `src/components/Navbar.js` and `src/components/Footer.js`.

## Deployment
This project is optimized for deployment on Vercel.
1. Push the code to a Git repository (GitHub/GitLab).
2. Connect the repository to Vercel.
3. The build command `npm run build` will run automatically.

## Performance Tuning
- Verify images are optimized (use `next/image` if adding heavy assets).
- Run `npm run lint` before committing to catch issues.
