import React, { useContext, useRef, useEffect } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const MusicPlayer = () => {
  const { tracks, currentIndex, setCurrentIndex } = useContext(MusicPlayerContext);
  const audioRef = useRef(null);

  // Validamos que existan tracks y que el índice sea válido
  if (!tracks || tracks.length === 0 || !tracks[currentIndex]) return null;

  const currentTrack = tracks[currentIndex];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % tracks.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);

  useEffect(() => {
    // Solo reproducimos si audioRef está montado
    if (audioRef.current && currentTrack) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);

  return (
    <div className="music-player fixed-bottom bg-light border p-2 d-flex justify-content-between align-items-center">
      <div>
        <strong>{currentTrack.title}</strong> - {currentTrack.artist}
      </div>
      <audio ref={audioRef} src={currentTrack.url} controls className="flex-grow-1 mx-2" />
      <div>
        <button className="btn btn-sm btn-primary me-1" onClick={handlePrev}>⏮</button>
        <button className="btn btn-sm btn-primary" onClick={handleNext}>⏭</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
