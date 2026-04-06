# 🏋️ 2-Gym — Gym Management Web App

A fullstack web application for gym management built with **React** and **Flask**. It centralizes client and trainer information, controls access by role, and provides personalized dashboards for each type of user.

---

## 🚀 Live Demo

| Service | URL |
|---------|-----|
| 🌐 Frontend | [two-gym-frontend.onrender.com](https://two-gym-frontend.onrender.com) |
| ⚙️ Backend | [two-gym-backend.onrender.com](https://two-gym-backend.onrender.com) |

---

## ✨ Main Features

- 🔐 **User registration and login** with JWT authentication
- 👥 **Role-based access** — separate dashboards for admin and client
- 💪 **Exercise assignment** — admins assign routines to clients
- 👤 **User profile** — clients view their personal info and assigned exercises

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| 🖥️ Frontend | React, Vite, CSS |
| ⚙️ Backend | Flask, Python, SQLAlchemy |
| 🗄️ Database | PostgreSQL |
| ☁️ Deployment | Render |

---

## 🖥️ How to Run Locally

### Prerequisites
- Node.js and npm installed
- Python 3.8+ and pipenv installed
- PostgreSQL installed and running

### ⚙️ Backend

```bash
# Clone the repository
git clone https://github.com/jenifferalejandracollazos-droid/2-gym.git
cd 2-gym

# Install dependencies
pipenv install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and secret keys

# Run migrations
pipenv run flask db upgrade

# Start the backend server
pipenv run flask run
```

### 🖥️ Frontend

```bash
# In a new terminal, navigate to the frontend folder
cd src/front

# Install dependencies
npm install

# Start the frontend
npm run start
```

The app will be running at `http://localhost:3000`

---

## 📐 Architecture

The application follows a **client-server architecture**:

- The **frontend** (React + Vite) communicates with the backend through a REST API
- The **backend** (Python/Flask) handles business logic, authentication, and database operations
- **JWT tokens** protect private routes and differentiate user roles (admin / client)

---

## 👥 Team

This project was built as a final project at [4Geeks Academy](https://4geeksacademy.com/) by:

- [Jeniffer Collazos](https://github.com/jenifferalejandracollazos-droid)
- Juan Castro

---

## 📬 Contact

**Jeniffer Collazos** — Fullstack Developer
📧 jecollazosdev@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/jeniffer-alejandra-collazos-córdoba1/)
💻 [GitHub](https://github.com/jenifferalejandracollazos-droid)
