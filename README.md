
<!-- Cover Image — export cover-preview.html as 1280×640 PNG and upload to GitHub, then replace the src below -->
<div align="center">

</div>
  <!-- <img width="1326" height="626" alt="Animation-ezgif com-cut" src="https://github.com/user-attachments/assets/a70a2106-9007-4226-933e-bbf5a2c983e5" /> -->
<img width="1325" height="626" alt="Animation2-ezgif com-cut" src="https://github.com/user-attachments/assets/8bcd5262-fe07-4d6f-acef-77df7141284f" />

<div align="center">

  <h1>🏺 GlazeGrid — Premium Tile Collection</h1>

  <p><em>Where every surface tells a story — one tile at a time.</em></p>

  ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
  ![BetterAuth](https://img.shields.io/badge/BetterAuth-black?style=for-the-badge&logo=auth0&logoColor=white)

</div>

<hr/>

## 📖 Overview

**GlazeGrid** is a full-stack premium tile gallery web application built with **Next.js 15 App Router**. Users can browse handcrafted ceramic, porcelain, marble, and mosaic tiles, view detailed product information, and manage their profiles — all behind a secure authentication system.

This project focuses on **Next.js server components, BetterAuth authentication, MongoDB integration, private route protection via middleware, and a polished responsive UI**.

<hr/>

## 🔗 Live Site

👉 **https://a-08-galze-haus.vercel.app/**

<hr/>

## 🛠️ Technologies Used

- **Framework:** Next.js 15 (App Router — Server & Client Components)
- **Styling:** Tailwind CSS v4, DaisyUI v5
- **Authentication:** BetterAuth (MongoDB Adapter) — Email/Password + Google OAuth
- **Database:** MongoDB Atlas (via BetterAuth adapter)
- **Forms:** React Hook Form
- **Notifications:** React Toastify
- **Animations:** Animate.css
- **Marquee:** react-fast-marquee
- **Icons:** React Icons

<hr/>

## ✨ Features

- **🏠 Home Page:** Hero banner with animated background, scrolling marquee of new arrivals, and a featured tiles section (top 4 tiles).
- **🖼 All Tiles Gallery:** Responsive card grid with live search by tile title.
- **🔍 Tile Detail Page:** Large image preview + full product info (title, price, description, dimensions, material, stock status). *Private — login required.*
- **🔐 Authentication:** Email/password login & registration with validation, plus one-click Google OAuth.
- **👤 My Profile:** View logged-in user info (name, email, avatar). *Private — login required.*
- **✏️ Update Profile:** Update display name and profile image URL via BetterAuth's `updateUser`.
- **🔒 Middleware Protection:** `/allTiles/[id]` and `/myProfile` routes are protected — unauthenticated users are redirected to `/login`.
- **⏳ Loading States:** Skeleton loading screens on data-fetching routes.
- **🚫 404 Page:** Custom not-found page for unknown routes.
- **📱 Fully Responsive:** Mobile, tablet, and desktop layouts.

<hr/>

## ⚙️ Core Implementation Concepts
 
- **Next.js App Router & Server Components:** Pages like Home, Tile Detail, and My Profile are fully server-rendered — data is fetched on the server before the page loads, improving performance and SEO.
- **BetterAuth Server-Side Session:** Instead of client-side `useSession()`, `auth.api.getSession({ headers })` is used in Server Components (Navbar, My Profile) to securely read the session without exposing it to the client.
- **Middleware Route Protection:** A `middleware.js` file intercepts requests to `/allTiles/:path+` and `/myProfile` — if no valid session exists, the user is immediately redirected to `/login` before the page even renders.
- **Google OAuth + Email/Password:** BetterAuth handles both social login (Google) and traditional email/password auth through a single unified config in `auth.js`, with a MongoDB adapter storing users and sessions.
- **React Hook Form Validation:** Login, Register, and Update Profile pages use `react-hook-form` for efficient, performant form handling with field-level validation (regex patterns, minLength, custom rules).
- **Client vs Server Component Split:** Interactive pieces (`Search`, `LogoutButtonInNavbar`, `Navlink`, `ScrollToTopInFooter`) are `"use client"` components, while data-fetching pages stay as Server Components — keeping the bundle lean.
- **Live Search without API calls:** The All Tiles page fetches all data once on mount, then filters purely on the client with `Array.filter()` — fast, instant results with no extra network requests.
- **Animate.css Integration:** Hero banner and Marquee use `animate__animated` classes for entrance animations, satisfying the npm library requirement cleanly without JavaScript overhead.
<hr/>

## 📁 Project Structure

```
src/
├── app/
│   ├── page.jsx                  # Home — Hero + Marquee + Featured Tiles
│   ├── layout.jsx                # Root layout — Navbar + Marquee + Footer
│   ├── loading.jsx               # Global loading UI
│   ├── not-found.jsx             # 404 page
│   │
│   ├── allTiles/
│   │   ├── page.jsx              # All tiles grid + search
│   │   ├── loading.jsx           # Tiles loading state
│   │   └── [id]/
│   │       └── page.jsx          # Single tile detail (private)
│   │
│   ├── login/
│   │   ├── layout.jsx            # Auth layout (no marquee)
│   │   └── page.jsx              # Login page
│   │
│   ├── register/
│   │   └── page.jsx              # Register page
│   │
│   ├── myProfile/
│   │   ├── page.jsx              # Profile page (private)
│   │   └── update/
│   │       └── page.jsx          # Update name & image
│   │
│   └── api/auth/[...all]/
│       └── route.js              # BetterAuth API handler
│
├── components/
│   ├── Navbar.jsx
│   ├── Navlink.jsx               # Active-aware nav link
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MarqueeBanner.jsx
│   ├── TileCard.jsx
│   ├── Search.jsx
│   ├── LogoutButtonInNavbar.jsx
│   └── ScrollToTopInFooter.jsx
│
├── lib/
│   ├── auth.js                   # BetterAuth server config
│   ├── auth-client.js            # BetterAuth client
│   └── data.js                   # API fetch helpers
│
└── middleware.js                  # Route protection
```

<hr/>

## 🔒 Route Permissions

| Route | Access |
|-------|--------|
| `/` | Public |
| `/allTiles` | Public |
| `/login` | Public |
| `/register` | Public |
| `/allTiles/[id]` | **Private** — redirect to `/login` |
| `/myProfile` | **Private** — redirect to `/login` |
| `/myProfile/update` | **Private** — redirect to `/login` |

<hr/>

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Navigate into the project
cd auraglaze

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your values (see below)

# Start the dev server
npm run dev
```

<hr/>

## 🔑 Environment Variables

Create a `.env.local` file in the root:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never commit your `.env.local` file. Make sure it's in `.gitignore`.

<hr/>

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication (email + Google OAuth) |
| `mongodb` | Database adapter for BetterAuth |
| `react-hook-form` | Form handling & validation |
| `react-toastify` | Toast notifications |
| `react-fast-marquee` | Scrolling marquee banner |
| `animate.css` | CSS animations |
| `react-icons` | Icon library |

<hr/>

## 👤 Author

**Md. Hadiuzzaman**

Textile Engineering Graduate | KUET | Frontend Developer passionate about building full-stack Next.js applications with clean UI and solid auth systems.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdhadiuzzaman)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MdHadiuzzaman0)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mdhadiuzzaman483@gmail.com)

<hr/>

<div align="center">
  <p>⭐ If you found this project helpful, please give it a star!</p>
  <p>© 2026 AuraGlaze — Made with 🏺 by Md. Hadiuzzaman</p>
</div>
