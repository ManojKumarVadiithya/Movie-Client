# 🎬 Movie Client – Full Stack Project

A full-stack **Movie Web Application** built with:
- **Backend:** Java Spring Boot (IntelliJ IDEA)
- **Frontend:** React.js
- **Database:** MongoDB

This project demonstrates integration of a modern UI with a RESTful backend, MongoDB persistence, and API-driven communication.

---

## 📂 Project Structure
```
movie-client/
│── backend/        # Spring Boot backend (Java + MongoDB)
│── frontend/       # React frontend (UI)
```

---

## 🚀 Backend Setup (Spring Boot + MongoDB)

### Prerequisites
- Install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- Install [Java JDK 17+](https://adoptium.net/)  
- Install [MongoDB Community Edition](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/atlas))

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/movie-client.git
   cd movie-client/backend
   ```

2. Open the **backend** folder in **IntelliJ IDEA**.

3. Wait for Maven dependencies to download.

4. Configure MongoDB connection in `src/main/resources/application.properties`:
   ```properties
   spring.data.mongodb.database=moviesdb
   spring.data.mongodb.uri=mongodb://localhost:27017/moviesdb
   ```

   *(Update with your MongoDB Atlas URI if using cloud database.)*

5. Run the backend:
   - Open `MovieClientApplication.java`
   - Click **Run ▶** (or `Shift + F10`)

6. Backend runs on:
   ```
   http://localhost:8080
   ```

---

## 🎨 Frontend Setup (React)

### Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS version recommended)
- Install npm or yarn (comes with Node.js)

### Steps
1. Navigate to the **frontend** folder:
   ```bash
   cd movie-client/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

4. Frontend runs on:
   ```
   http://localhost:3000
   ```

---

## 🔗 Connecting Frontend & Backend
- By default, the React frontend will make API requests to `http://localhost:8080`.  
- Ensure backend is running before using the frontend.

---

## 🛠️ Tech Stack
- **Backend:** Spring Boot, Spring Data MongoDB, Lombok
- **Frontend:** React.js, Axios, React Router
- **Database:** MongoDB

---

## 📜 License
This project is licensed under the MIT License – feel free to use and modify.

---

## 👨‍💻 
**[Manoj Kumar Vadiithya](https://github.com/ManojKumarVadiithya)**
