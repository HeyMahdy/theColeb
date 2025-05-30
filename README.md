# theColeb

## Overview
TheColeb is a Node.js-based backend platform for developers and entrepreneurs to connect, collaborate on projects, and share ideas. It provides a robust API for user management, project collaboration, and more.

---

## Features
- User authentication (JWT-based)
- User profile management (bio, skills, showcase, academics, experience, visuals)
- Project and post management
- Collaboration and connection system
- Email verification and OTP
- Dockerized for easy deployment
- Prisma ORM for PostgreSQL

---

## Project Structure
```
- prisma/                # Prisma schema and migrations
- src/
  - controllers/         # Business logic
  - middlewares/         # Express middlewares
  - routes/              # API endpoints
  - services/            # Service layer
  - app.js               # Main Express app
- generated/             # Generated Prisma client
- logs/                  # Log files
- api-documentation.md   # Full API documentation
- setup_backend.bat      # Windows backend setup script
- setup_database.bat     # Windows DB setup script
- setup.sql              # SQL for DB setup
- Dockerfile             # Docker build file
- docker-compose.yml     # Docker Compose for multi-service setup
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 14+
- (Optional) Docker & Docker Compose

### 1. Clone the repository
```sh
git clone https://github.com/HeyMahdy/theColeb.git
cd theColeb
```

### 2. Setup Environment
#### Using Scripts (Windows)
- Run `setup_database.bat` to create the database.
- Run `setup_backend.bat` to install dependencies, create `.env`, and run migrations.

#### Manual Setup
1. Create a PostgreSQL database (see `setup.sql`).
2. Copy `.env.example` to `.env` and fill in your secrets (see `setup_backend.bat` for required variables).
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run migrations:
   ```sh
   npx prisma migrate dev --name init
   ```

### 3. Start the Server
```sh
npm run dev
```
Server runs on [http://localhost:3000](http://localhost:3000)

---

## Docker Usage
To run everything in containers:
```sh
docker-compose up --build
```

---

## API Documentation
See [`api-documentation.md`](./api-documentation.md) for full details.

### Example Endpoints
- `POST /collab/v1/auth/signup` — Register a new user
- `POST /collab/v1/auth/login` — Login
- `GET /collab/v1/auth/me` — Get current user
- `POST /collab/v1/info` — Create/update basic info
- `POST /collab/v1/bio` — Create bio
- `POST /collab/v1/tech` — Add technical profile
- `POST /collab/v1/showcase` — Add showcase links
- `POST /collab/v1/project` — Add project
- `POST /collab/v1/collab` — Collaboration settings
- `POST /collab/v1/visuals` — Add visuals
- `POST /collab/v1/posts` — Create post
- `POST /collab/v1/connections` — Manage connections

---

## Database Schema
See [`prisma/schema.prisma`](./prisma/schema.prisma) for full schema. Main entities:
- User, BasicInfo, TechnicalProfile, BioSummary, Showcase, Project, Collaboration, Visuals, Post, Connection, Academic, Experience

---

## Development
- Code style: Prettier
- Main entry: `src/app.js`
- Environment variables: `.env` (see `setup_backend.bat` for required keys)
- Logs: `logs/`

---

## Contributing
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License
[ISC](./LICENSE)

---

## Credits
- Built with Node.js, Express, Prisma, PostgreSQL
- See contributors on GitHub