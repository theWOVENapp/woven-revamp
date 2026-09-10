# Woven

Woven is a React-based social media workspace concept focused on thoughtful planning, publishing, analytics, and collaboration.

## Stack

- React
- React Router
- Vite
- CSS with responsive layouts and light/dark themes

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Routes

- `/` Product home page
- `/features` Features and analytics page
- `/pricing` Pricing plans and credit calculator
- `/about` About Woven
- `/contact` Contact page
- `/resources` Resources page
- `/cookie-policy` Cookie policy
- `/privacy-policy` Privacy policy
- `/terms-of-service` Terms of service

## Project Structure

```text
src/
├── main.jsx                 # App entry point and route definitions
├── Layout.jsx               # Shared navigation, theme toggle, and page shell
├── Footer.jsx               # Shared footer
├── Home.jsx                 # Product home page
├── Features.jsx             # Features page with animated metrics
├── Pricing.jsx              # Pricing plans and interactive credit slider
├── AboutPage.jsx            # About page
├── ContactPage.jsx          # Contact page
├── ResourcesPage.jsx        # Resources page
├── CookiePolicyPage.jsx     # Cookie policy page
├── PrivacyPolicyPage.jsx    # Privacy policy page
├── TermsOfServicePage.jsx   # Terms of service page
├── styles.css               # Main responsive stylesheet
├── Features.css             # Feature-specific styles
└── legal.css                # Legal page styles
```

## Features

- Shared responsive navigation and footer
- React Router navigation between pages
- Persistent light and dark mode toggle
- Animated feature metrics
- Interactive pricing credit slider
- Responsive layouts for mobile and desktop

## Validation

Run the production build before deploying:

```bash
npm run build
```

The current repository remote is:

```text
https://github.com/theWOVENapp/woven-revamp.git
```
