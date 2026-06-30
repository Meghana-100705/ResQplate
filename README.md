# 🍽️ ResqPlate – Food Donation & Redistribution Platform

ResqPlate is a web-based platform built for hackathons to reduce food waste and connect food donors (restaurants, individuals, events) with NGOs and volunteers who can redistribute excess food to people in need.

---

## 📌 Problem Statement

Every day, large amounts of edible food are wasted while many people go hungry. There is no efficient system that connects food donors with NGOs in real time.

ResqPlate solves this gap by enabling:
- Easy food donation posting
- NGO request tracking
- Volunteer coordination
- Impact tracking dashboard

---

## ✨ Features

### 👤 Donor Module
- Add food donation details
- View donation status
- Track contribution history

### 🏢 NGO Dashboard
- View available donations
- Accept/reject donations
- Manage collection requests

### 🚴 Volunteer Module
- View pickup tasks
- Accept delivery requests
- Track assigned donations

### 📊 Impact Dashboard
- Total meals saved
- Active donations
- NGO activity tracking

### 🏠 General Features
- Responsive UI (React + Vite)
- Modular component structure
- Clean dashboard system
- Reusable UI components

---

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- HTML5 & CSS3
- React Router
- Tailwind CSS (if used)
- Git & GitHub

---

## 📁 Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── Features.jsx
│ ├── Stats.jsx
│ ├── FoodCard.jsx
│ ├── StatCard.jsx
│ ├── PriorityBadge.jsx
│ └── HowItWorks.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── AddDonation.jsx
│ ├── DonorDashboard.jsx
│ ├── NGODashboard.jsx
│ ├── VolunteerDashboard.jsx
│ └── ImpactDashboard.jsx
│
├── assets/
├── App.jsx
├── main.jsx
└── index.css


---


---

## ⚙️ Installation & Setup

Clone the repository
git clone https://github.com/your-username/resqplate.git
cd resqplate

Install dependencies
npm install

Run development server
npm run dev

📦 Build for Production
npm run build
