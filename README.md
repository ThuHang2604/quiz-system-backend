# Question & Quiz System: Backend API

RESTful API for managing quizzes and multiple-choice questions, built with **Node.js, Express and MongoDB**. It includes JWT authentication, role-based access (Admin / User) and interactive Swagger documentation.

🔗 **Live API:** <https://quiz-system-backend-seven.vercel.app>

📖 **API docs (Swagger UI):** <https://quiz-system-backend-seven.vercel.app/api-docs/>

## Features

- **Authentication:** sign up / log in with JWT (2-hour expiry), passwords hashed with bcrypt.
- **Role-based access:** Admin-only routes for quiz management and user listing.
- **Ownership check:** only a question's author can edit or delete it.
- **Quiz & question CRUD** with validation (at least 2 options, valid correct-answer index).
- **Bulk creation:** add one or many questions to a quiz in a single request.
- **Keyword filter:** get a quiz's questions that mention "capital".
- **Swagger / OpenAPI 3** docs with built-in JWT authorization.

## Tech Stack

Node.js · Express · MongoDB (Mongoose) · JWT · bcryptjs · Swagger UI (OpenAPI 3) · Vercel

## API Overview

Full details and a "try it out" console are available in the [Swagger docs](https://quiz-system-backend-seven.vercel.app/api-docs). Protected routes need the header `Authorization: Bearer <token>`.

| Resource | Endpoints | Access |
|---|---|---|
| Auth | `POST /auth/signup`, `POST /auth/login` | Public |
| Users | `GET /users` | Admin |
| Quizzes | `GET /quizzes`, `GET /quizzes/:id`, `GET /quizzes/:id/populate` | Public |
| | `POST /quizzes`, `PUT /quizzes/:id`, `DELETE /quizzes/:id` | Admin |
| | `POST /quizzes/:id/question`, `POST /quizzes/:id/questions` | User |
| Questions | `GET /questions`, `GET /questions/:id` | Public |
| | `POST /questions` | User |
| | `PUT /questions/:id`, `DELETE /questions/:id` | Author |

## Getting Started

**Requirements:** Node.js v18+ and MongoDB (local or [Atlas](https://www.mongodb.com/atlas)).

```bash
git clone https://github.com/ThuHang2604/quiz-system-backend.git
cd quiz-system-backend
npm install
cp .env.example .env    # fill in your own values
npm start
```

Open `http://localhost:5000/api-docs` to explore the API.

| Variable | Description |
|---|---|
| `PORT` | Server port (default `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `SECRET_KEY` | Secret used to sign JWTs |

## Project Structure

```
├── config/        # MongoDB connection
├── controllers/   # Business logic (auth, user, quiz, question)
├── middlewares/   # verifyUser, verifyAdmin, verifyAuthor
├── models/        # Mongoose schemas: User, Quiz, Question
├── routes/        # Route definitions
├── docs/          # OpenAPI spec + Swagger UI route
└── app.js         # Entry point
```

## Notes

- Built as an assignment for the Node.js course (SDN301m) at FPT University.
- For demo purposes, `signup` accepts an optional `admin` flag so the Admin role can be tested easily. In production, roles should be assigned server-side only.

## Author

**Do Thi Thu Hang** · [@ThuHang2604](https://github.com/ThuHang2604)
