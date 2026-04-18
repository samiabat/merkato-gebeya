<div align="center">
  <img src="src/assets/images/logo.png" alt="Merkato Gebeya Logo" width="120">

  # Merkato Gebeya — ሜርካቶ ገበያ

  **Ethiopia's Premier Online Marketplace**

  [![Angular](https://img.shields.io/badge/Angular-16-red?logo=angular)](https://angular.io/)
  [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  [Live Demo](#) · [Report Bug](https://github.com/samiabat/merkato-gebeya/issues) · [Request Feature](https://github.com/samiabat/merkato-gebeya/issues)
</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🛒 About

**Merkato Gebeya** (ሜርካቶ ገበያ — _Marketplace_ in Amharic) is a full-featured e-commerce web application built with **Angular 16** and **Tailwind CSS**. Inspired by Ethiopia's iconic Merkato market district in Addis Ababa — the largest open-air market in Africa — the platform brings that vibrant trading spirit into the digital age.

The platform connects **10,500+ sellers**, **300+ brands**, and **3 million+ customers** across Ethiopia with a modern, fast, and secure shopping experience.

---

## ✨ Features

### 🏪 Shopping Experience
- **Hero Carousel** — Auto-sliding banner with smooth transitions and manual controls
- **Flash Sales** — Real-time countdown timer, stock progress bars, and discount badges
- **Browse by Category** — 16 product categories with icons and hover effects
- **Best Selling Products** — Curated bestsellers with ratings, reviews, and badges
- **Explore Products** — Full product grid with new/sale labels and hover actions
- **New Arrivals** — Magazine-style featured layout with hero and side cards

### 🔍 Navigation & Discovery
- **Sticky Header** with announcement banner, search bar, and icon badges
- **Category Navigation Bar** with icons; accordion on mobile
- **Responsive Search** with full-text search input

### 👤 User Accounts
- **Sign In** — Split-panel layout with social login options, show/hide password
- **Sign Up** — Benefits panel, form validation, social signup, terms agreement
- **Profile** — User account management
- **Wishlist** — Save and manage favourite products
- **Shopping Cart** — Quantity controls, coupon codes, order summary

### 📄 Information Pages
- **About Us** — Brand story, stats, values, and team profiles
- **Contact Us** — Contact info cards, social links, and full contact form with subject selector
- **Privacy Policy** — Data handling and user rights
- **Terms of Service** — Platform usage terms

### �� Design & UX
- **Industry-standard layout** — Announcement bar → Header → Category nav → Content → Footer
- **Professional footer** — Newsletter, social links, quick links, app download CTAs
- **Hover effects** — Scale, opacity, and color transitions on all interactive elements
- **Responsive design** — Mobile-first, works on all screen sizes
- **Inter font** — Clean, modern typography used across the entire app
- **Custom scrollbar** — Branded red scrollbar
- **Smooth animations** — CSS keyframe animations and Tailwind transitions

### ⚙️ Technical
- **JWT Authentication** — Token-based login/logout with `localStorage`
- **Reactive Forms** — Form validation with Angular's `ReactiveFormsModule`
- **HttpClient** — API integration with backend services
- **OnInit/OnDestroy** — Proper lifecycle management for timers and subscriptions
- **Angular Router** — Route-based navigation with `routerLinkActive`

---

## 📸 Screenshots

| Home Page | Flash Sales | Categories |
|-----------|-------------|------------|
| Hero carousel with sidebar | Countdown timer + product cards | Icon grid with hover effects |

| Sign In | Sign Up | About Us |
|---------|---------|----------|
| Split panel layout | Feature list + form | Stats, values, team |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Angular](https://angular.io/) | 16.2 | Frontend framework |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | 5.1 | Type-safe JavaScript |
| [Font Awesome](https://fontawesome.com/) | 6.4 | Icons |
| [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) | — | Typography |
| [RxJS](https://rxjs.dev/) | 7.8 | Reactive programming |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js)
- **Angular CLI** ≥ 16.x

```bash
npm install -g @angular/cli@16
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/samiabat/merkato-gebeya.git
cd merkato-gebeya
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
ng serve
# or
npm start
```

4. **Open your browser**

Navigate to `http://localhost:4200/`. The app will automatically reload when you edit source files.

---

## 📁 Project Structure

```
merkato-gebeya/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/            # Top navigation bar with announcement banner
│   │   │   ├── second-nav/        # Category navigation bar
│   │   │   ├── main-content/      # Hero carousel + feature badges
│   │   │   ├── flash-sales/       # Flash sale products with countdown timer
│   │   │   ├── browse-category/   # Category icon grid
│   │   │   ├── best-selling-products/  # Top sellers section
│   │   │   ├── explore-products/  # Product exploration grid
│   │   │   ├── new-arrivals/      # Featured new arrivals layout
│   │   │   ├── footer/            # Multi-column footer + newsletter
│   │   │   ├── home/              # Home page (assembles all sections)
│   │   │   ├── sign-in/           # Login page
│   │   │   ├── sign-up/           # Registration page
│   │   │   ├── about-us/          # About page with team & values
│   │   │   ├── contact-us/        # Contact page with form
│   │   │   ├── cart/              # Shopping cart
│   │   │   ├── wishlist/          # Wishlist page
│   │   │   ├── profile/           # User profile
│   │   │   ├── create-ad/         # Post an ad
│   │   │   ├── view-my-ads/       # Manage my ads
│   │   │   ├── privacy-policy/    # Privacy policy page
│   │   │   └── terms-of-service/  # Terms page
│   │   ├── models/                # TypeScript interfaces & types
│   │   ├── services/              # Injectable services (API, state)
│   │   ├── app-routing.module.ts  # Route definitions
│   │   ├── app.module.ts          # Root NgModule
│   │   └── app.component.*        # Root component
│   ├── assets/
│   │   └── images/                # Logos and static images
│   ├── index.html                 # HTML entry point
│   ├── main.ts                    # Angular bootstrap
│   └── styles.css                 # Global styles + Tailwind directives
├── angular.json                   # Angular workspace configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

---

## 📄 Pages & Components

### Home Page (`/home`)

The main landing page assembled from these child components in order:

1. `<app-second-nav>` — Category navigation bar
2. `<app-main-content>` — Hero carousel with sidebar and feature badges
3. `<app-flash-sales>` — Flash sale products with live countdown timer
4. `<app-browse-category>` — Browse by category icon grid
5. `<app-best-selling-products>` — Top selling products
6. `<app-explore-products>` — Full product exploration grid
7. `<app-new-arrivals>` — Featured new arrivals magazine layout

### Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | → `/home` | Redirects to home |
| `/home` | `HomeComponent` | Main landing page |
| `/sign-in` | `SignInComponent` | Login page |
| `/sign-up` | `SignUpComponent` | Registration page |
| `/cart` | `CartComponent` | Shopping cart |
| `/wishlist` | `WishlistComponent` | Saved items |
| `/profile` | `ProfileComponent` | User account |
| `/about-us` | `AboutUsComponent` | About the company |
| `/contact-us` | `ContactUsComponent` | Contact form & info |
| `/privacy-policy` | `PrivacyPolicyComponent` | Privacy policy |
| `/terms-of-service` | `TermsOfServiceComponent` | Terms & conditions |
| `/my-ads/create` | `CreateAdComponent` | Post a product ad |
| `/my-ads/view` | `ViewMyAdsComponent` | Manage your ads |

---

## 💻 Development

### Running the development server

```bash
ng serve
# Navigate to http://localhost:4200/
```

### Generating components

```bash
# Component
ng generate component components/my-component

# Service
ng generate service services/my-service

# Interface
ng generate interface models/my-model
```

### Running tests

```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
```

### Linting

```bash
ng lint
```

---

## 🏗 Build & Deployment

### Production Build

```bash
ng build
# Output: dist/product-listing/
```

### Optimized Production Build

```bash
ng build --configuration production
```

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build --configuration production
firebase deploy
```

### Deploy to Netlify

1. Build the project: `ng build --configuration production`
2. Drag and drop the `dist/product-listing/` folder to [netlify.com/drop](https://app.netlify.com/drop)

Or connect your GitHub repo and set:
- **Build command:** `ng build --configuration production`
- **Publish directory:** `dist/product-listing`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new payment method
fix: correct countdown timer logic
style: improve product card hover effects
docs: update README with deployment instructions
refactor: clean up header component
```

---

## 📝 Environment Variables

The app currently connects to the backend at `https://ephara-backend.onrender.com`. To use a different API:

1. Update the API base URL in your service files under `src/app/services/`
2. Or use Angular's `environment.ts` for environment-specific configuration:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Angular](https://angular.io/) — The web framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Font Awesome](https://fontawesome.com/) — Icon library
- [Unsplash](https://unsplash.com/) — High-quality demo images
- Ethiopia's vibrant Merkato market — The inspiration behind this project

---

<div align="center">
  <p>Made with ❤️ in Ethiopia 🇪🇹</p>
  <p>
    <a href="https://github.com/samiabat/merkato-gebeya">GitHub</a> ·
    <a href="#">Live Demo</a> ·
    <a href="https://github.com/samiabat/merkato-gebeya/issues">Issues</a>
  </p>
</div>
