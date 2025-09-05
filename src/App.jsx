
import React from "react";
import AppRouter from "./router/AppRouter";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext"; 
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="app-container">
        <AppRouter />           {/* Todas las páginas */}
        <MusicPlayer />         {/* Siempre visible */}
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
