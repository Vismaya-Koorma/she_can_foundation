# She Can Foundation - Full Stack NGO Portal

Welcome to the She Can Foundation web portal project! This is a modern, responsive, and professional full-stack application built for a youth-driven NGO. It features a stunning glassmorphism user interface with full dark mode support, subtle animations, and a functioning contact form connected to a Node.js/Express backend and a MySQL database.

## 🌟 Features

*   **Responsive Modern UI**: Looks stunning on everything from mobile phones to high-resolution desktop monitors.
*   **Volunteer Section**: Beautiful animated cards highlighting our core programs.
*   **Glassmorphism Theme**: Leverages semi-transparent panels with high blur coefficients for a clean, premium look.
*   **Dark Mode**: Remembers your theme preference in your browser's local storage and syncs with system preferences automatically.
*   **Micro-Animations**: Features smooth scroll reveals, button hover scales, entry sequences, and card pop-ups courtesy of Framer Motion.
*   **Contact Form**: With real-time validation, disabled states during submit, and toast notifications.
*   **Backend API Integration**: Fetch and submit contact messages smoothly using Express and MySQL.

## 🛠️ Tech Stack

**Frontend**
*   React 19 (Vite)
*   Tailwind CSS (Styling)
*   Framer Motion (Animations)
*   Lucide React (Icons)
*   React Hot Toast (Notifications)

**Backend**
*   Node.js & Express
*   MySQL2 (Database)
*   CORS & Dotenv

## 📁 Project Structure

The project is split into two main folders for a clean separation of concerns:

```
she_can-foundation/
├── backend/                  # Node.js & Express server
│   ├── controllers/          # Request handling logic
│   ├── routes/               # API endpoint routing (/api/contact, /api/messages)
│   ├── db.js                 # MySQL database pool setup
│   └── server.js             # Server entry point
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page structures (Home)
│   │   ├── assets/           # Images and static assets
│   │   ├── App.jsx           # Main React component
│   │   └── index.css         # Tailwind CSS imports & variables
│   └── tailwind.config.js    # Tailwind configuration
│
└── schema.sql                # SQL script to initialize database
```

## 🚀 Installation Steps

Follow these instructions to get the application running locally on your computer.

### Prerequisites
*   Node.js (v16.0.0 or higher)
*   MySQL Server (XAMPP / WampServer / Docker)

### 1. Database Setup
1.  Start your local MySQL Server.
2.  Open your MySQL client and run the queries located in `schema.sql` at the root of this project:
    ```sql
    CREATE DATABASE IF NOT EXISTS shecanfoundation;
    USE shecanfoundation;
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

### 2. Environment Variables
In the `backend/` directory, copy `.env.example` to `.env` (or create one) and add your database credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=shecanfoundation
```
In the `frontend/` directory, create a `.env` file (optional, defaults to localhost:5000):
```env
VITE_API_URL=http://localhost:5000/api/contact
```

### 3. Backend Setup
1. Open a terminal in the `backend/` directory.
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

### 4. Frontend Setup
1. Open a second terminal window in the `frontend/` directory.
2. Install dependencies: `npm install`
3. Start the Vite React development server: `npm run dev`

## 📡 API Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/contact` | Submits a new contact message to the MySQL database. |
| `GET` | `/api/messages` | Fetches all submitted contact messages. |

## 📸 Screenshots
*(Add your project screenshots here)*
*   Hero Section
*   Volunteer Cards
*   Dark Mode View

## 🌍 Deployment Guide

To deploy this project to the internet for free, we recommend using **Vercel** for the frontend, **Render** for the backend, and a cloud MySQL provider like **Aiven** or **Clever Cloud**.

### Backend Deployment (Render)
1. Push your code to GitHub.
2. Sign up on [Render.com](https://render.com/).
3. Create a new **Web Service** and connect your GitHub repository.
4. Set the Root Directory to `backend`.
5. Build Command: `npm install`
6. Start Command: `node server.js`
7. Add your Environment Variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) corresponding to your cloud MySQL database.

### Frontend Deployment (Vercel)
1. Sign up on [Vercel.com](https://vercel.com/).
2. Create a new Project and import your GitHub repository.
3. Set the Root Directory to `frontend`.
4. The Build Command (`npm run build`) and Output Directory (`dist`) should be detected automatically.
5. In Environment Variables, add `VITE_API_URL` pointing to your deployed Render backend URL (e.g., `https://your-backend.onrender.com/api/contact`).
6. Click Deploy.
