<div align="center">
  <img src="public/logo.png" width="80" height="80" alt="LoomPro Logo">
  
  # LoomPro | Premium Handloom E-Commerce

  <p align="center">
    <strong>A state-of-the-art, full-stack e-commerce platform dedicated to premium handloom excellence. Built with Next.js 14+, Tailwind CSS, and AI-powered interactions.</strong>
  </p>

  <p align="center">
    <a href="https://ecommerce-zeta-six-45.vercel.app">
      <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-FF4500?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://ecommerce-zeta-six-45.vercel.app/api">
      <img src="https://img.shields.io/badge/📁_BACKEND_API-000000?style=for-the-badge&logo=json&logoColor=white" alt="Backend API" />
    </a>
  </p>
</div>

<br />

![LoomPro Home](public/screenshots/home_page.png)

## ✨ The Premium Experience

**LoomPro** is not just an e-commerce store; it's a digital boutique. We've combined traditional craftsmanship with a high-performance digital experience featuring cinematic layouts, luxury typography, and ultra-smooth micro-animations.

- **💎 Luxury Aesthetic**: Modern glassmorphic design, dark cinematic overlays, and 4K AI-generated lifestyle imagery.
- **🌗 Dual-Theme System**: Sleek light and dark modes optimized for premium visual impact.
- **🛒 High-Performance Cart**: Real-time state management using Zustand for instant additions and updates.
- **⚡ Next.js Powered**: Lightning-fast build and load times using the latest App Router architecture.
- **📱 Mobile-First**: Fully responsive design for the ultimate shopping experience on the go, without sacrificing the premium feel.

---

## 🤖 AI Concierge: Loomy Assistant

We've integrated a powerful **AI Chatbot** powered by **Google Gemini 2.0**. Loomy intelligently greets you based on the day of the week, helps customers find the perfect handloom products, answers questions about craftsmanship, and provides instant support.

<div align="center">
  <img src="public/screenshots/chatbot.png" alt="Loomy AI Chatbot" width="600" style="border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);" />
</div>

---

## 📸 Application Highlights

### 🛍️ The Brand Mall & Collections
Experience our curated handloom collections with hyper-realistic AI imagery and editorial layouts.
![Shop Page](public/screenshots/shop_page.png)

### 🔐 Secure Authentication & Order Management
Premium login, registration, and checkout experience backed by Firebase Authentication and Firestore database integration for a seamless, secure shopping journey.
![Login Page](public/screenshots/login_page.png)

---

## 🛠️ Technology Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js_14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logoColor=white" alt="Zustand" />
</div>

---

## 📂 Project Structure

```bash
.
├── src/
│   ├── app/            # Next.js App Router (Pages, Layouts, API Routes)
│   ├── components/     # Reusable UI & Layout Components (ChatBot, Navbar, etc.)
│   ├── lib/            # Utility functions and Firebase configuration
│   └── store/          # Zustand State Management (AuthStore, CartStore)
├── public/             # Static Assets, AI Images, & Screenshots
└── package.json        # Dependencies & Scripts
```

---

## 🚀 Getting Started

### 1️⃣ Setup & Environment
Clone the repository and add your API keys to a `.env.local` file in the root:
```env
# Google Gemini API
GEMINI_API_KEY=your_gemini_key

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2️⃣ Run Locally
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## ☁️ Deployment (Vercel)
This project is optimized for **Vercel**:
1. Connect your GitHub repo to Vercel.
2. Add your environment variables in the Vercel Dashboard.
3. Deploy! Vercel automatically detects Next.js and builds the frontend and serverless API routes seamlessly.

---

<p align="center">
  Crafted with ❤️ by <b>Imdaad Shajahan</b>
</p>
