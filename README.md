# NewsNest

A responsive news reader built with React and Bootstrap that fetches headlines from NewsAPI.org. Clean UI, infinite scroll, category navigation and search make browsing the latest news fast and simple.

---

## Demo

- Home: Top headlines by category
- Search: Find news by keyword
- Infinite scroll: Load more articles as you scroll
- Responsive: Works across desktop and mobile
- Footer: Persistent, responsive footer

---

## Tech Stack

- React (Functional components + hooks)
- Bootstrap 5 (layout and components)
- react-router-dom (client routing)
- react-infinite-scroll-component (infinite scrolling)
- NewsAPI.org (data source)

---

## Screenshots

Add project screenshots to the `public/` folder and reference them here (optional).

---

## Getting Started

Prerequisites:

- Node.js 14+ and npm
- NewsAPI API key (create a free account at https://newsapi.org)

1. Clone the repo
   ```bash
   git clone <your-repo-url>
   cd NewsApp
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your NewsAPI key
   ```env
   VITE_NEWSAPI_KEY=your_api_key_here
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173`

---

## Features

- Fetch and display top headlines from NewsAPI.org
- Search for news articles by keyword
- Infinite scrolling for seamless browsing
- Responsive design for mobile and desktop
- Category navigation for easy access to different news topics

---

## Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/YourFeature`
6. Submit a pull request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [NewsAPI.org](https://newsapi.org) for the news data
- [React](https://reactjs.org/) for the JavaScript library
- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [Vite](https://vitejs.dev/) for the build tool
- [react-router-dom](https://reactrouter.com/) for routing
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) for infinite scrolling
