
# 📱 AppDeck — Your Ultimate Application Hub

**AppDeck** is a high-performance, responsive App Store platform. It features a curated marketplace where users can discover, search, and manage software with real-time analytics and local installation persistence.

## 🚀 [Live Demo Link](https://appdeck-beryl.vercel.app/)

## 📂 [GitHub Repository](https://github.com/muhammed-mamun/appdeck)

-----

## ✨ Key Features & Functionality

### 🏠 Home & Discovery

  * **Dynamic Banner:** Quick-action buttons to external stores and primary navigation.
  * **Top Apps:** A grid of the 8 highest-performing apps featuring real-time download and rating stats.
  * **Live Search:** Case-insensitive filtering that updates the UI instantly as the user types.

### 📊 App Intelligence (Details Page)

  * **Data Visualization:** Custom horizontal bar charts powered by **Recharts** to visualize user rating distributions.
  * **Dynamic Loaders:** Integrated **Suspense** and loading animations for a smooth navigation experience.
  * **Success Feedback:** Interactive **SweetAlert2** toasts triggered upon successful installation.

### 🛠️ My Installation (Challenge Requirements)

  * **Local Persistence:** Uses `localStorage` to save user "installations," ensuring data survives page reloads.
  * **Smart Sorting:** A custom dropdown allows users to sort their library by **Downloads (High-Low / Low-High)**.
  * **One-Click Uninstall:** Remove apps from both the UI and local storage with a single click, accompanied by a confirmation toast.

-----

## 🛠️ Tech Stack

  * **Framework:** React 18+ (with React Router v7, vite v7)
  * **Styling:** Tailwind CSS & DaisyUI
  * **Charts:** Recharts (SVG-based responsive charts)
  * **State Management:** React Hooks (`useState`, `useEffect`)
  * **Notifications:** SweetAlert2
  * **Icons:** Lucide-React / Custom SVG Assets

-----

## 🧱 Assignment Requirements Checklist

  - [x] **Responsiveness:** Fully optimized for Mobile, Tablet, and Desktop.
  - [x] **Route Handling:** Custom 404 Error page and `_redirects` for production stability.
  - [x] **Data Design:** JSON structure with 12-20 objects including nested rating arrays.
  - [x] **Challenge Logic:** Full `localStorage` CRUD operations for the Installation page.
  - [x] **Sorting:** Implemented High-Low and Low-High download sorting.
  - [x] **Commits:** Minimum 5+ meaningful commits in the repository history.

-----

### 🛠️ Installation & Setup

1.  **Clone:** `git clone https://github.com/your-username/appdeck.git`
2.  **Install:** `npm install`
3.  **Run:** `npm run dev`
4.  **Build:** `npm run build`

**Developed with ❤️ by Md. Mamun Hossain**
