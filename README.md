# Energetic - Next.js Application

This is the Next.js version of the Energetic website.

## Getting Started

### 1. Install Dependencies

First, install the required npm packages:

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
energetic/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── service/
│   │   └── page.tsx         # Services/Products page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── courts-flooring/
│   │   └── page.tsx         # Court flooring details
│   ├── sauna/
│   │   └── page.tsx         # Sauna details
│   ├── gym/
│   │   └── page.tsx         # Gym equipment details
│   ├── smart-lockers/
│   │   └── page.tsx         # Smart lockers details
│   ├── jacuzzi/
│   │   └── page.tsx         # Jacuzzi details
│   └── guard/
│       └── page.tsx         # Guard house details
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with contact info
│   └── ProductsComponent.tsx # Products grid
├── public/
│   ├── css/                 # Copied from original
│   ├── documents/           # Copied from original
│   ├── fonts/               # Copied from original
│   ├── images/              # Copied from original
│   └── js/                  # Bootstrap JS
├── package.json
├── next.config.js
└── tsconfig.json
```

## Key Changes

### 1. **React Components**
- HTML pages converted to React components (`.tsx` files)
- Reusable Header and Footer components
- Client-side navigation with Next.js Link

### 2. **Routing**
- File-based routing instead of separate HTML files
- Dynamic active states in navigation
- No need for jQuery to load header/footer

### 3. **Static Assets**
- All assets moved to `public/` directory
- Paths updated to work with Next.js

### 4. **JavaScript**
- Bootstrap carousel works with Next.js
- Custom JavaScript converted to React hooks (`useEffect`, `useState`)
- No jQuery dependency for component loading

### 5. **Styling**
- CSS files served from public directory
- Support for CSS-in-JS with styled-jsx
- Bootstrap CSS loaded globally

## Pages

1. **Home** (`/`) - Landing page with video background and about section
2. **About** (`/about`) - Company information
3. **Services** (`/service`) - Products listing
4. **Contact** (`/contact`) - Contact form and map
5. **Product Details** - Individual pages for each product

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Bootstrap CSS
- Font Awesome

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © Energetic Contracting LLC
