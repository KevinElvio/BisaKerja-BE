# ✨ BisaKerja ✨

BisaKerja-BE is the backend for the BisaKerja application, a job search platform specifically designed for people with disabilities. This application is developed using Express.js, Prisma ORM, and MySQL as the database. The project aims to facilitate job access for people with disabilities, with features such as job management, user authentication 🔐, and comments 💬.

## 🎯 Main Features
- 🔑 User Authentication: Registration and login using JWT tokens.
- 📋 Job Management: CRUD (Create, Read, Update, Delete) for job posts.
- 💬 Comment Feature: Users can add comments to job posts.
- 🌟 Disability-Friendly Job Search: Displays jobs that are disability-friendly.

## 🛠️ Technologies Used
- ⚡ Node.js + Express.js - Backend server
- 🛢️ Prisma ORM - Database ORM for MySQL
- 🗄️ MySQL - Database
- 🔒 JWT - JSON Web Token for authentication
- 🔑 bcrypt - For password hashing

## 🚀 Installation and Usage
1. **Clone the repository**:
   ```bash
   git clone https://github.com/KevinElvio/BisaKerja-BE.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd BisaKerja-BE
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a .env file and add the following environment variables**:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   JWT_SECRET="your_jwt_secret"
   PORT=3000
   ```
5. **Run Prisma migration to create tables in the database**:
   ```bash
   npx prisma migrate dev
   ```
6. **Start the server**:
   ```bash
   npm start
   ```
   The server will be running at `http://localhost:4000` 🚀

