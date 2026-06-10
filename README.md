# Rathi Varshini R Portfolio

Premium full stack personal portfolio built with React, Tailwind CSS v4, Framer Motion, React Router, Node.js, Express.js, MongoDB Atlas, JWT authentication, Multer uploads, Nodemailer, and Axios.

## Folder Structure

```txt
Personal portfolio/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Projects.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── projectRoutes.js
│   │   └── uploadRoutes.js
│   ├── uploads/
│   │   └── .gitkeep
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GithubStats.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Skills.jsx
│   │   ├── data/
│   │   │   └── portfolio.js
│   │   ├── lib/
│   │   │   └── api.js
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Local Installation

Use Node.js `20.19.0` or newer. The installed Vite, ESLint, React Router, and Mongoose versions require Node 20+.

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs at `http://localhost:5173`. Backend runs at `http://localhost:5000`.

## MongoDB Atlas Setup

1. Create a MongoDB Atlas project and free cluster.
2. Create a database user with read/write access.
3. Add your current IP address to Network Access, or allow Render with `0.0.0.0/0`.
4. Copy the connection string into `backend/.env` as `MONGO_URI`.
5. Replace the password and database name in the URI.

## Admin Setup

Set these values in `backend/.env`:

```env
ALLOW_ADMIN_REGISTER=true
ADMIN_SETUP_KEY=your-private-key
JWT_SECRET=your-long-random-secret
```

Create the admin by sending a POST request to:

```txt
POST http://localhost:5000/api/auth/register
```

Body:

```json
{
  "name": "Rathi Varshini R",
  "email": "admin@example.com",
  "password": "strongpassword123",
  "setupKey": "your-private-key"
}
```

After creating the admin, set `ALLOW_ADMIN_REGISTER=false` in production.

## API Routes

```txt
GET    /api/health
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
POST   /api/upload
POST   /api/contact
```

Project write routes and uploads require `Authorization: Bearer <token>`.

## Contact Email Setup

For Gmail, create an app password and set:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=your-email@gmail.com
```

## Render Backend Deployment

1. Push the repo to GitHub.
2. Create a new Render Web Service.
3. Root directory: `backend`.
4. Build command: `npm install`.
5. Start command: `npm start`.
6. Add backend environment variables from `backend/.env.example`.
7. Set `CLIENT_URL` to your Vercel frontend URL.

## Vercel Frontend Deployment

1. Import the GitHub repo into Vercel.
2. Root directory: `frontend`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add `VITE_API_URL=https://your-render-service.onrender.com/api`.
6. Redeploy after the Render API is live.

## GitHub Setup

```bash
git init
git add .
git commit -m "Build production portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## Production Checklist

- Replace placeholder GitHub, LinkedIn, email, and project demo links in `frontend/src/data/portfolio.js`.
- Upload a real resume PDF and update the hero resume link if needed.
- Create the admin user, then disable registration.
- Configure MongoDB Atlas, SMTP, Render, and Vercel environment variables.
- Test project CRUD, image upload, contact form, and protected admin access.
