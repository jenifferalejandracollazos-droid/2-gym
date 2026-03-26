# 2-Gym 🏋️ — Gym Management Web App

A full-stack web application for gym management, built with a client-server architecture. It centralizes client and trainer information, controls access by role, and provides personalized dashboards for each type of user.

---

## 🚀 Live Demo

> Coming soon — deployment in progress.

---

## ✨ Features

- **Authentication & role-based access control** using JSON Web Tokens (JWT)
- **Client dashboard** — view personal profile, active subscription, and assigned training routines
- **Trainer dashboard** — manage assigned clients and their progress
- **RESTful API** designed to centralize and organize gym data in a structured, secure way
- **Responsive frontend** built with React 
- **Image management** via Cloudinary for optimized media storage and delivery

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| | Frontend | React.js, Custom CSS3, JavaScript (ES6+) |
| Media Storage | Cloudinary |
| Backend | Python, Flask |
| Database | SQLAlchemy, PostgreSQL |
| Auth | JSON Web Token (JWT) |
| Project Management | Trello |
| Version Control | Git, GitHub |

---

## 📐 Architecture

The application follows a **client-server architecture**:

- The **frontend** (React) communicates with the backend through a REST API
- The **backend** (Python/Flask) handles business logic, authentication, and database operations
- **JWT tokens** are used to protect private routes and differentiate user roles

---

## 🖥️ How to Run Locally

### Prerequisites
- Node.js and npm installed
- Python 3.8+ installed
- PostgreSQL installed and running

### Backend

```bash
# Clone the repository
git clone https://github.com/jenifferalejandracollazos-droid/2-gym.git
cd 2-gym

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
flask db upgrade

# Start the backend server
flask run
```

### Frontend

```bash
# In a new terminal, navigate to the frontend folder
cd src/front

# Install dependencies
npm install

# Start the frontend
npm start
```

The app will be running at `http://localhost:3000`

---

## 👥 Team

This project was built as a final project at [4Geeks Academy](https://4geeksacademy.com/) by:

- [Jeniffer Collazos](https://github.com/jenifferalejandracollazos-droid)
- Juan Castro
- Ricardo Ali

---

## 🧠 What I Learned

- Designing and consuming a RESTful API from scratch
- Implementing JWT authentication with role-based access control
- Managing frontend state in React to display dynamic, role-specific dashboards
- Coordinating a multi-person development workflow using Trello and Git

---

## 🔮 Future Improvements

- [ ] Deploy to Render (frontend + backend)
- [ ] Add payment integration for subscription management
- [ ] Implement progress tracking with charts for clients
- [ ] Add email notifications for subscription renewals
- [ ] Mobile-responsive improvements

---

## 📬 Contact

**Jeniffer Collazos** — Frontend Developer  
📧 jecollazosdev@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/jeniffer-alejandra-collazos-córdoba1/)  
💻 [GitHub](https://github.com/jenifferalejandracollazos-droid)
