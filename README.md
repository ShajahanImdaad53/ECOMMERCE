# <img src="public/logo.png" width="40" height="40" valign="middle"> LoomPro | Premium Handloom E-Commerce

![LoomPro Banner](public/images/premium_hero_sarong.png)

## 🌟 Overview
**LoomPro** is a state-of-the-art, full-stack e-commerce platform dedicated to premium handloom excellence. Built with the latest 2026 web technologies, it combines traditional craftsmanship with a high-performance digital experience.

[**🚀 Live Demo**](https://ecommerce-shajahan.vercel.app) | [**📁 Backend API**](https://ecommerce-shajahan.vercel.app/api)

---

## 🤖 New Feature: Loomy AI Assistant
We've integrated a powerful **AI Chatbot** powered by **Google Gemini 2.0**. Loomy helps customers find the perfect handloom products, answers questions about craftsmanship, and provides instant support.

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Gemini_AI_2.0-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✨ Key Features

- **🤖 AI Concierge**: Real-time assistance powered by Gemini 2.0.
- **💎 Premium UI/UX**: Modern glassmorphic design with ultra-smooth animations.
- **🌗 Dual-Theme System**: Sleek light and dark modes optimized for premium aesthetics.
- **🛒 High-Performance Cart**: Real-time state management using Zustand.
- **⚡ Turbopack Powered**: Lightning-fast build and load times using Next.js 16.
- **📱 Mobile-First**: Fully responsive design for the ultimate shopping experience on the go.

---

## 📸 Product Showroom

| Silk Collection | Premium Sarongs | Handloom Art | Traditional Wear |
| :---: | :---: | :---: | :---: |
| ![Sarong 1](public/images/sarong_1.png) | ![Sarong 2](public/images/sarong_2.png) | ![Sarong 3](public/images/Sarong1.jpeg) | ![Sarong 4](public/images/Sarong5.jpeg) |

---

## 📂 Project Structure

```bash
.
├── public/             # Global Static Assets (Optimized for Vercel)
├── backend/            # Express.js API & AI Logic
│   ├── src/routes/     # API & Chatbot Routes
│   └── src/index.ts    # Server Entry Point
├── frontend/           # Next.js 16 Application
│   ├── src/app/        # App Router & API Handlers
│   └── src/components/ # ChatBot & UI Components
└── vercel.json         # Modern Unified Deployment Config
```

---

## 🚀 Getting Started

### 1️⃣ Setup & Environment
Clone the repo and add your keys to a `.env` file in the root:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_gemini_key
```

### 2️⃣ Run Locally
```bash
# Install root dependencies
npm install

# Run both Frontend & Backend
npm run dev
```

---

## ☁️ Deployment (Vercel)
This project is optimized for the **Modern Vercel Pipeline**:
1. Connect your GitHub repo to Vercel.
2. Add your environment variables in the Vercel Dashboard.
3. Deploy! Vercel handles the Next.js frontend and the Node.js functions automatically.

---

<p align="center">
  Crafted with ❤️ by <b>Imdaad Shajahan</b>
</p>
