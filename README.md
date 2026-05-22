# Full Stack Personal Portfolio Website

A modern, responsive, full-stack personal portfolio website built using React.js, Node.js, Express.js, and MongoDB. This project showcases projects, skills, resume, contact form functionality, authentication, admin dashboard, animations, and live deployment.

---

# Live Demo

Frontend Deployment:
https://yourportfolio.vercel.app

Backend API:
https://yourbackend.onrender.com

GitHub Repository:
https://github.com/yourusername/portfolio-website

---

# Features

## Frontend Features

- Modern Responsive UI
- Dark / Light Mode
- Responsive Mobile Navbar
- Framer Motion Animations
- Resume Download Button
- Skills Showcase
- Dynamic Projects Section
- Contact Form
- Tailwind CSS Styling

---

## Backend Features

- REST API using Express.js
- MongoDB Database Integration
- Authentication using JWT
- Admin Dashboard
- Project CRUD Operations
- Contact Form Email Sending
- Project Image Uploads using Multer

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Nodemailer

---

## Database

- MongoDB Atlas

---

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- Version Control → GitHub

---

# Project Structure

```text
portfolio-project/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/yourusername/portfolio-website.git
```

```bash
cd portfolio-website
```

---

# Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Environment Variables

Create `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL=your_email@gmail.com
PASSWORD=your_email_app_password
```

---

# MongoDB Atlas Setup

1. Create MongoDB Atlas account
2. Create free cluster
3. Create database user
4. Allow network access
5. Connect application
6. Copy MongoDB connection string
7. Paste inside `.env`

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolioDB
```

---

# API Endpoints

## Projects

### Get All Projects

```http
GET /api/projects
```

---

### Add Project

```http
POST /api/projects
```

Body:

```json
{
  "title": "Portfolio Website",
  "description": "Full Stack Portfolio",
  "githubLink": "https://github.com/yourrepo",
  "liveLink": "https://yourlivewebsite.com"
}
```

---

# Authentication Routes

## Register User

```http
POST /api/auth/register
```

---

## Login User

```http
POST /api/auth/login
```

---

# Contact Form Route

```http
POST /api/contact
```

---

# Image Upload Route

```http
POST /api/upload
```

---

# Deployment Guide

# Deploy Frontend on Vercel

1. Push frontend code to GitHub
2. Login to Vercel
3. Import GitHub repository
4. Select frontend folder
5. Click Deploy

Official Website:

https://vercel.com

---

# Deploy Backend on Render

1. Push backend code to GitHub
2. Login to Render
3. Create New Web Service
4. Connect GitHub repository
5. Add environment variables
6. Deploy

Official Website:

https://render.com

---

# GitHub Commands

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial Commit"
```

Add remote repository:

```bash
git remote add origin https://github.com/yourusername/portfolio-website.git
```

Push code:

```bash
git push -u origin main
```

---

# Screenshots

Add screenshots here after completing UI.

Example:

```markdown
![Homepage](./screenshots/home.png)
```

---

# Future Improvements

- Redux Toolkit
- TypeScript
- Docker Integration
- CI/CD Pipeline
- AI Chatbot
- Blog System
- Analytics Dashboard
- Cloudinary Image Storage
- Admin Analytics
- Project Search & Filter

---

# Learning Outcomes

Through this project:

- Learned Full Stack Development
- Integrated Frontend + Backend + Database
- Implemented Authentication
- Built REST APIs
- Deployed Production Applications
- Worked with MongoDB Atlas
- Used Git & GitHub
- Built Responsive UI
- Implemented Real-world Features

---

# Author

Rathi Varshini R

LinkedIn:
https://www.linkedin.com/in/rathi-varshini-r-06858b367

GitHub:
https://github.com/RathiVarshiniR

---

# License

This project is licensed under the MIT License.

---

# Final Note

This project was developed as a full-stack internship task to gain practical experience in building and deploying modern web applications using industry-standard technologies.
