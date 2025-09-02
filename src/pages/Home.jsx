import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";

// Simulación de datos
const playlists = ["Favoritos", "Workout", "Chill", "Pop", "Rock"];

const albumsPopulares = [
  { title: "After Hours", artist: "The Weeknd", cover: "https://static.qobuz.com/images/covers/ab/up/ghsn05bq7upab_600.jpg", url: "https://..." },
  { title: "Future Nostalgia", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bf-60.jpg", url: "https://..." },
  { title: "Justice", artist: "Justin Bieber", cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431", url: "https://..." },
];

const artistasPopulares = [
  { name: "The Weeknd", image: "https://i1.sndcdn.com/avatars-hlvKdkpTrNN7RIgm-Pkvv0g-t240x240.jpg" },
  { name: "Dua Lipa", image: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc" },
  { name: "Justin Bieber", image: "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg" },
];

function Home() {
  // Estado para canciones en el MusicPlayer
  const [tracks, setTracks] = useState([
    { title: "Blinding Lights", artist: "The Weeknd", url: "https://..." },
    { title: "Levitating", artist: "Dua Lipa", url: "https://..." },
  ]);

  // Función para cambiar la canción al hacer click en un álbum
  const handlePlaySong = (album) => {
    setTracks([{ title: album.title, artist: album.artist, url: album.url }]);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar playlists={playlists} />

      {/* Main */}
      <main className="flex-fill p-3">
        <h2>Álbumes Populares</h2>
        <div className="d-flex flex-wrap">
          {albumsPopulares.map((album, i) => (
            <SongCard
              key={i}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
              onClick={() => handlePlaySong(album)}
            />
          ))}
        </div>

        <h2 className="mt-4">Artistas Populares</h2>
        <div className="d-flex flex-wrap">
          {artistasPopulares.map((artist, i) => (
            <ArtistCard key={i} name={artist.name} image={artist.image} />
          ))}
        </div>

        {/* Music Player */}
        <div className="mt-4">
          <MusicPlayer tracks={tracks} />
        </div>
      </main>
    </div>
  );
}

export default Home;
