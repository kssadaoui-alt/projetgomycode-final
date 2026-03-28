# 🛒 SwiftCart – Fullstack E-Commerce Web Application

SwiftCart is a responsive and modern e-commerce web app built using:

- **Frontend**: Next.js, React, TailwindCSS, Axios, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Dev Tools**: Nodemon, Multer, CORS, bcrypt

---

## 📁 Project Structure


---

## 🧑‍💻 How to Run This Project Locally

### ✅ Prerequisites

Make sure you have these installed on your system:

- [Node.js & npm](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/try/download/community) or MongoDB Atlas URL  

Check if they're installed:

```bash
node -v
npm -v
```

Step 01

```git clone https://github.com/your-username/SwiftCart.git```
```cd SwiftCart```


Step 02cd server

# Initialize (if needed)
```npm init -y```

# Install backend dependencies
```npm install express mongoose bcrypt cors multer nodemon```

 Frontend Setup

 ```
cd ../client

# Initialize (if needed)
npm init -y

# Install frontend dependencies
npm install next react react-dom axios framer-motion react-icons react-router-dom react-toastify swiper

# Install dev dependencies
npm install -D tailwindcss @tailwindcss/postcss
```

Environment Setup


Replace your_mongodb_connection_url with your actual MongoDB connection string

```
 MONGO_URL=your_mongodb_connection_url
PORT=5000
```

 Step 4: Running the Project

 Start the Backend Server
 
 ```
 cd server
npm start
```

Start the Frontend

```
cd client
npm run dev
```


🌟 Author
Made by kawther lazaar