# React Native Movie App

This is a simple React Native application that fetches movie data from the TMDB API and displays a list of searched or popular movies according to the user's request. The project utilizes key React Native concepts such as FlatLists, `useState`, `useEffect`, hooks, props, debouncing, and navigation using tabs.

This is my first React Native project, and I have also used TypeScript for the first time, implementing interfaces and creating constants for managing assets efficiently.

## Features
- Fetch and display popular movies from TMDB API
- Search functionality to find movies based on user queries
- Efficient API requests using debouncing
- Navigation setup using tabs
- Dynamic rendering of movie cards
- Organized file structure for better maintainability

## Installation & Setup

Follow these steps to set up and run the project:

### Prerequisites
- Node.js installed
- Expo CLI installed globally (`npm install -g expo-cli`)
- TMDB API Key (Get it from [TMDB](https://www.themoviedb.org/))

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShhRey/rn-movie-app.git
   cd rn-movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create an `.env` file** in the root directory and add your TMDB API Key:
   ```env
   TMDB_API_KEY=your_api_key_here
   ```

4. **Start the application**
   ```bash
   npm start
   ```

   or

   ```bash
   expo start
   ```

5. **Run the app on an emulator or physical device**
   - Scan the QR code with Expo Go (for Android) or use an iOS simulator.

## File Structure

```
rn-movie-app/
│-- assets/              # Images, fonts, and icons
│-- components/          # Reusable UI components
│-- screens/             # App screens (Home, Search, Details)
│-- navigation/          # Tab navigation setup
│-- hooks/               # Custom hooks (e.g., for API calls)
│-- api/                 # TMDB API fetch functions
│-- constants/           # Constants for theme, API keys, etc.
│-- App.tsx              # Root component
│-- package.json         # Project dependencies
│-- README.md            # Project documentation
```

## Key Concepts Used
- **React Native FlatList** for rendering movie lists efficiently.
- **React Navigation** for handling tab-based navigation.
- **Hooks (`useState`, `useEffect`)** for state and effect management.
- **Custom Hooks** to manage API calls efficiently.
- **Debouncing** to limit API requests while typing in the search bar.
- **TypeScript Interfaces** to enforce type safety.
- **Styled Components & Tailwind CSS** for styling.
- **Fetching API Data** from TMDB and handling async requests properly.

## Future Improvements
- Implement a favorites system for saving movies
- Enhance UI/UX with animations using GSAP
- Add user authentication for personalized experience

## Contributions
Feel free to fork, modify, and contribute to the project!

---

Happy coding! 🚀