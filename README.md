# React Accordion

A simple and interactive **Accordion Component** built with **React.js**. This project demonstrates **state management, event handling, props, and conditional rendering** in React.

## 🚀 Features
- 📌 Expand/collapse sections when clicked.
- 🎯 Only one section open at a time.
- 🔥 Uses React **functional components** and **hooks** (`useState`).
- 🎨 Simple and responsive design.

---

## 📂 Project Structure
```
react-accordion/
├── src/
│   ├── components/
│   │   ├── Accordion.js
│   │   ├── Accordion.css
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md
```

---

## 🛠️ Installation and Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/jaysreeb/react-accordion.git
   cd react-accordion
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ How It Works
### **1️⃣ `Accordion.js` (Component)**
- Loops through **accordion data** (titles and content).
- Uses `useState` to track the open section.
- Expands/collapses content when clicked.

### **2️⃣ `App.js` (Main Component)**
- Defines **accordion data** (`title` & `content`).
- Passes data as **props** to `Accordion.js`.

### **3️⃣ `Accordion.css` (Styling)**
- Basic styling for accordion items.
- Clickable headers.
- Smooth transitions for opening/closing.

---

## 🖥️ Usage Example
Modify the `accordionData` in `App.js` to customize content:
```jsx
const accordionData = [
  { title: "What is React?", content: "React is a JavaScript library for UI development." },
  { title: "Why use React?", content: "React makes building UIs easy with reusable components." },
];
```

---

## 📌 Future Improvements
✅ Add animations for smooth transitions.  
✅ Allow multiple sections to open at once.  
✅ Add icons (`+` / `-`) to indicate open/close state.
