# She Can Foundation - Full Stack NGO Portal

Welcome to the **She Can Foundation** web portal project! This is a modern, responsive, and beginner-friendly full-stack application built for a youth-driven NGO. It features a stunning glassmorphism user interface with full dark mode support, subtle animations, and a functioning contact form connected to a Node.js/Express backend and a MySQL database.

---

## 📁 Project Structure

The project is split into two main folders for a clean separation of concerns:

```text
she_can-foundation/
├── backend/                  # Node.js & Express server
│   ├── controllers/          # Request handling & form validation logic
│   │   └── contactController.js
│   ├── routes/               # API endpoint routing (/api/contact)
│   │   └── contactRoutes.js
│   ├── db.js                 # MySQL database pool connection setup
│   ├── package.json          # Node dependencies (cors, express, mysql2, dotenv)
│   ├── server.js             # Server entry point
│   ├── .env                  # Live environment variables (DB host, user, password, port)
│   └── .env.example          # Environment variables template
│
├── frontend/                 # React frontend (Vite template)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── About.jsx     # NGO description, metrics, and Mission/Vision cards
│   │   │   ├── ContactForm.jsx # Glassmorphic form with validation & submission hooks
│   │   │   ├── Footer.jsx    # Copyright, social icons, and attribution
│   │   │   ├── Hero.jsx      # High-impact animated introduction section
│   │   │   └── Navbar.jsx    # Sticky responsive navigation with dark-mode toggle
│   │   ├── App.jsx           # Main React component, coordinates state & dark mode
│   │   ├── index.css         # Tailwind CSS imports & glassmorphism variables
│   │   └── main.jsx          # Vite React mounting point
│   ├── index.html            # Main HTML wrapper (contains SEO details & Google Fonts)
│   ├── tailwind.config.js    # Tailwind configuration (custom colors & Outfit font)
│   └── package.json          # React dependencies (framer-motion, lucide-react)
│
└── schema.sql                # SQL script to initialize database and tables
```

---

## 🛠️ Prerequisites

To run this project locally, ensure you have the following installed:
1. **Node.js** (v16.0.0 or higher) - [Download Node.js](https://nodejs.org/)
2. **MySQL Server** (either stand-alone or via packages like XAMPP / WampServer / Docker)

---

## 🚀 Getting Started

Follow these step-by-step instructions to get the application running locally on your computer.

### Step 1: Database Setup
1. Start your local **MySQL Server**.
2. Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or MySQL Command Line).
3. Open and run the commands located in the `schema.sql` file at the root of this project.
   Alternatively, copy and run the following queries:
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

### Step 2: Backend Setup & Launch
1. Open a new terminal in the `backend` directory.
2. Review the `backend/.env` file. Modify the connection settings to match your MySQL database credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password_here
   DB_NAME=shecanfoundation
   ```
3. Install the backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server in development mode:
   ```bash
   npm run dev
   ```
   *You should see a message in your terminal: `✅ Successfully connected to the MySQL database.`*

### Step 3: Frontend Setup & Launch
1. Open a **second** terminal window in the `frontend` directory.
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. Click on the URL shown in your terminal (usually `http://localhost:5173`) to open the website in your browser!

---

## 🎨 UI Features

- **Responsive Design**: Looks stunning on everything from mobile phones to high-resolution desktop monitors.
- **Glassmorphism Theme**: Leverages semi-transparent panels with high blur coefficients for a clean, premium modern look.
- **Dark Mode Toggle**: Remembers your theme preference in your browser's local storage and syncs with system preferences automatically.
- **Micro-Animations**: Features smooth button hover scales, entry sequences, and card pop-ups courtesy of `framer-motion`.
- **Real-Time Validation**: Evaluates empty form inputs and checks email format correctness on the client-side before communicating with the database.
- **Submit Loading State**: Changes the button to a spinning loader text during server requests to prevent duplicate submittals.
