# Personal Project Showcase App

A modern, responsive web application built for a creative agency to showcase their portfolio of work. Built with React and styled using Tailwind CSS.

---

##Overview

**K Corp.** is a creative agency portfolio web application designed to give agencies a clean, professional platform to present their past and current projects to potential clients and collaborators.

The application solves a real-world problem faced by creative agencies the need to have a fast, easy-to-update, and visually appealing online presence that doesn't require rebuilding the entire site every time a new project is completed.

With K.Corp, agency staff can:

- View all existing projects at a glance on the landing page
- Add new projects instantly through a built-in form without touching any code
- Search and filter through projects in real time to quickly find specific work
- Share the portfolio link with clients as a live, always up-to-date showcase

The application was built with simplicity and maintainability in mind. It uses React's component-based architecture to keep the codebase clean and modular, making it easy for any developer to pick up, understand, and extend the project in the future.


---

## Features

- **Project Listing** — Displays all agency projects with title and description
- **Add Projects** — A form to dynamically add new projects to the portfolio
- **Search & Filter** — Live search to filter projects by title
- **Form Validation** — Alerts users when required fields are empty
- **Responsive Design** — Works seamlessly on mobile and desktop

---

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling

---

## Project Structure

```
src/
├── components/
│   ├── ProjectCard.jsx       # Individual project card
│   ├── ProjectForm.jsx       # Form to add new projec
│   └── DisplayProjects.jsx   # Project list with searc
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── index.css                 # Global styles / Tailwind import
```

---

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repository

```

2. Navigate into the project directory

```bash
cd portfolio.react
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

---

##  Author
Angela
---

## License

This project is open source and available under the [MIT License](LICENSE).
