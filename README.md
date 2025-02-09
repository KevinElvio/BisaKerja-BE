# ✨ BisaKerja-BE ✨

BisaKerja-BE adalah backend untuk aplikasi **BisaKerja**, platform pencarian kerja khusus untuk **orang dengan disabilitas**. Aplikasi ini dikembangkan menggunakan **Express.js**, **Prisma ORM**, dan **MySQL** sebagai database. Proyek ini bertujuan untuk memfasilitasi akses pekerjaan bagi penyandang disabilitas dengan fitur manajemen pekerjaan, autentikasi pengguna 🔐, dan komentar 💬.

## 🎯 Fitur Utama
- 🔑 **User Authentication**: Registrasi dan login dengan token JWT.
- 📋 **Manajemen Pekerjaan**: CRUD (Create, Read, Update, Delete) untuk job posts.
- 💬 **Fitur Komentar**: Pengguna dapat menambahkan komentar pada job posts.

## 🛠️ Teknologi yang Digunakan
- ⚡ **Node.js** + **Express.js** - Backend server
- 🛢️ **Prisma ORM** - Database ORM untuk MySQL
- 🗄️ **MySQL** - Database
- 🔒 **JWT** - JSON Web Token untuk autentikasi
- 🔑 **bcrypt** - Untuk hashing password

## 🚀 Instalasi dan Penggunaan
1. **Clone repository ini**:
   ```bash
   git clone https://github.com/KevinElvio/BisaKerja-BE.git
   ```
2. **Masuk ke direktori project**:
   ```bash
   cd BisaKerja-BE
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Buat file `.env` dan tambahkan variabel lingkungan berikut**:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   JWT_SECRET="your_jwt_secret"
   PORT=3000
   ```
5. **Jalankan migrasi Prisma untuk membuat tabel di database**:
   ```bash
   npx prisma migrate dev
   ```
6. **Jalankan server**:
   ```bash
   npm start
   ```
   Server akan berjalan di `http://localhost:3000` 🚀

