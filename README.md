# Cart App – Frontend (React + Vite)

Frontend implementation of an eCommerce Product Module built using **React (Vite)**.
This app consumes REST APIs from the Spring Boot backend to provide product browsing, search, filters, pagination, and product detail viewing.

---

## Tech Stack

* React (Vite)
* Axios
* React Hooks
* Component-Based Architecture
* CSS / Inline Styling

---

## Backend Repository

This frontend connects to the Spring Boot backend:

👉 https://github.com/rakeshkumar04/cart-app

---

## Features Implemented

### 🔹 Product Listing

* Fetch products from backend APIs
* Server-side pagination support
* Dynamic page navigation
* Total products handling

### 🔹 Search & Filters

Multi-filter product search:

* Keyword (Name / Description)
* Category
* Price Range (Min / Max)
* Ratings

Filters dynamically call backend search APIs.

### 🔹 Product Details Page

* View individual product
* Image display
* Description, price, category, ratings
* Seller & stock info

### 🔹 Image Handling

* Multiple product images
* Backend static image mapping
* Placeholder fallback support

### 🔹 Pagination

* Prev / Next navigation
* Page state handling
* Total pages calculation

---

## Frontend Architecture

```
src/
 ├─ api/
 │   └─ axios.js
 ├─ components/
 │   ├─ ProductCard.jsx
 │   ├─ SearchFilters.jsx
 │
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ ProductDetails.jsx
 │
 ├─ App.jsx
 └─ main.jsx
```

---

## API Integration

| Feature         | Endpoint Used              |
| --------------- | -------------------------- |
| Get Products    | `/api/product?page=&size=` |
| Search Products | `/api/product/search`      |
| Product Details | `/api/product/{id}`        |

---

## Setup Instructions

```bash
# Clone repo
git clone <your-frontend-repo-url>

# Install dependencies
npm install

# Run app
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## Use Cases Covered

* eCommerce product browsing UI
* Filter-based search experience
* Pagination UI logic
* API integration handling
* Component reusability

---

## Project Status

✅ Product Listing UI
✅ Pagination
✅ Search & Filters
✅ Product Details Page
✅ Image Rendering
✅ Backend API Integration

---

## Author

**Rakesh Kumar R**
Full Stack Developer | React | Spring Boot | System Design
