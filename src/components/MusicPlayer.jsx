import React, { useState, useRef, useEffect } from "react";

const MusicPlayer = ({ tracks = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  // Evitar errores si no hay canciones
  if (!tracks || tracks.length === 0) return <div>No hay canciones disponibles</div>;

  const currentTrack = tracks[currentIndex];

  // Función para ir a la siguiente canción
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  // Función para ir a la canción anterior
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  // Reproducir automáticamente al cambiar la canción
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex, currentTrack]);

  return (
    <div className="music-player border p-2 bg-light rounded">
      <p>
        <strong>{currentTrack.title}</strong> - {currentTrack.artist}
      </p>
      <audio ref={audioRef} src={currentTrack.url} controls autoPlay className="w-100" />
      <div className="mt-2 d-flex justify-content-between">
        <button className="btn btn-sm btn-primary" onClick={handlePrev}>⏮ Prev</button>
        <button className="btn btn-sm btn-primary" onClick={handleNext}>Next ⏭</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
