# 📘 Learning Tracker App

A modern **React Single Page Application (SPA)** that helps users track and manage what they are learning. This app allows users to add new learning items, search through them, and view detailed information in a clean and interactive interface.

---

## 🌐 Live Demo

👉 https://edwinngengi-art.github.io/learning-tracker/

---

## 🚀 Features

* ➕ Add new learning items (title + description)
* 🔍 Search and filter items in real-time
* 📄 View detailed information for each item
* ⚡ Fast navigation using React Router (SPA)
* 🎨 Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router (HashRouter for deployment)
* **Styling:** Tailwind CSS
* **Deployment:** GitHub Pages

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
git clone https://github.com/edwinngengi-art/learning-tracker.git
cd learning-tracker
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Locally

```
npm run dev
```

### 4. Build for Production

```
npm run build
```

---

## 🧠 How It Works

* Users can add learning items using a form
* Items are stored in React state
* Search dynamically filters items
* Clicking an item navigates to a detail page using routing
* The app is deployed as a static site using GitHub Pages

---

## 🔮 Future Improvements

* 💾 Persist data using local storage or a backend
* ✏️ Edit and delete items
* 🏷️ Add categories or tags
* 🌙 Dark mode
* 📱 Improved mobile responsiveness

---

## 👨‍💻 Author

**Edwin Ngengi**
GitHub: https://github.com/edwinngengi-art

---

## 📄 License

This project is open-source and available under the MIT License.
