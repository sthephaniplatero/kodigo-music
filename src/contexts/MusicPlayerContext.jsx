import React, { createContext, useState } from "react";

export const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [tracks, setTracks] = useState([
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      url: "/songs/The Weeknd - Blinding Lights (Official Audio).mp3"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      url: "/songs/Dua Lipa - Levitating Featuring DaBaby (Official Music Video).mp3"
    }
  ]); // canciones iniciales
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <MusicPlayerContext.Provider value={{ tracks, setTracks, currentIndex, setCurrentIndex }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}
