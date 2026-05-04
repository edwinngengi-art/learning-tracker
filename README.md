<<<<<<< HEAD
# 📘 Learning Tracker App

A modern **React Single Page Application (SPA)** that helps users track what they are learning in an organized and interactive way.
This app allows users to add, search, and view learning items, making it a simple but effective productivity tool.

---

## 🚀 Overview

The **Learning Tracker App** is designed to demonstrate core frontend development skills using React, including:

* Component-based architecture
* State management with React Hooks
* Client-side routing
* Responsive UI design

It provides a clean interface where users can manage their learning goals efficiently.

---

## ✨ Features

### 📝 Add Learning Items

* Users can input a **title** and **description**
* Items are instantly added to the list

### 🔍 Search Functionality

* Real-time filtering of items
* Case-insensitive search by title

### 📄 Detailed View

* Click on any item to view full details
* Uses dynamic routing (`/item/:id`)

### ⚡ Single Page Application

* Smooth navigation without page reloads
* Powered by React Router

### 🎨 Styled UI

* Clean and responsive design using Tailwind CSS

---

## 🛠️ Tech Stack

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| React        | Frontend framework          |
| Vite         | Fast development build tool |
| Tailwind CSS | Styling and layout          |
| React Router | Navigation and routing      |

---

## 📂 Project Structure

```
learning-tracker/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ItemCard.jsx
│   │   └── ItemList.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Detail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│── public/
│── package.json
│── vite.config.js
│── tailwind.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```
git clone https://github.com/YOUR-USERNAME/learning-tracker.git
cd learning-tracker
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the App

```
npm run dev
```

### 4. Open in Browser

```
http://localhost:5173
```

---

## 🧠 How the App Works

### State Management

The app uses React’s `useState` hook to manage:

* Learning items
* Search input
* Form inputs

### Adding Data

When a user adds a new item:

* A unique ID is generated
* The item is stored in state
* The UI updates automatically

### Filtering Data

The search input dynamically filters items:

```
item.title.toLowerCase().includes(search.toLowerCase())
```

### Routing

Navigation is handled using React Router:

* `/` → Home page
* `/item/:id` → Detail page

---

## 📸 Screens (Suggested)

You can add screenshots here:

* Home page with form
* Search functionality
* Detail page view

---

## 🔮 Future Improvements

* 💾 Persist data with local storage or database
* ✏️ Edit and delete functionality
* 🏷️ Categories and tags
* 🔐 User authentication
* 🌙 Dark mode support
* 📱 Enhanced mobile responsiveness

---

## 🧪 Learning Objectives

This project demonstrates:

* Building a full SPA using React
* Managing state effectively
* Structuring scalable frontend apps
* Implementing routing and navigation
* Styling with a utility-first CSS framework

---

## 👨‍💻 Author

**Edwin Ngengi**
GitHub: https://github.com/edwinngengi-art

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

* React documentation
* Tailwind CSS docs
* Vite documentation

---
=======
  
>>>>>>> b08d7f6 (Fix routing for GitHub Pages)
