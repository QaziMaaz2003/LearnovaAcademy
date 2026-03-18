# Public Assets Folder

This folder contains static assets that are served by Vite during development and included in the production build.

## Contents

- **favicon.ico** - Website favicon
- **vite.svg** - Vite logo (you can replace this with your own logo)
- **robots.txt** - SEO robots configuration

## How to Use

Any file placed in this folder will be available at the root of your application:
- `public/favicon.ico` → `/favicon.ico`
- `public/vite.svg` → `/vite.svg`
- `public/robots.txt` → `/robots.txt`

## Best Practices

1. Store images, fonts, and other static assets here
2. Use absolute paths in your code: `/image.png` instead of relative paths
3. Keep file sizes reasonable for faster loading
4. Use appropriate image formats (WebP, PNG, JPG)

## Adding Assets

Simply add files to this directory and reference them in your HTML/JSX with absolute paths:

```html
<img src="/logo.png" alt="Logo" />
```

or in CSS:

```css
background-image: url('/pattern.png');
```
