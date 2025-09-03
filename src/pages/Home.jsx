import React, { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";

// Simulación de datos
const playlists = ["Favoritos", "Workout", "Chill", "Pop", "Rock"];


const albumsPopulares = [
  { 
    title: "After Hours", 
    artist: "The Weeknd", 
    cover: "https://static.qobuz.com/images/covers/ab/up/ghsn05bq7upab_600.jpg", 
    
  },
  { 
    title: "Future Nostalgia", 
    artist: "Dua Lipa", 
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bf-60.jpg", 
    
  },
  { 
    title: "Justice", 
    artist: "Justin Bieber", 
    cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431", 
   
  },
  { 
    title: "SOUR", 
    artist: "Olivia Rodrigo", 
    cover: "https://akamai.sscdn.co/letras/360x360/albuns/6/0/d/a/1081701689003054.jpg", 
   
  },
  { 
    title: "Fine Line", 
    artist: "Harry Styles", 
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png", 
    
  },
  { 
    title: "Born This Way", 
    artist: "Lady Gaga", 
    cover: "https://i.scdn.co/image/ab67616d0000b2736d2bc35812c2d7f67d110e48", 
    
  },
  

  
];

const artistasPopulares = [
  { 
    name: "The Weeknd", 
    image: "https://i1.sndcdn.com/avatars-hlvKdkpTrNN7RIgm-Pkvv0g-t240x240.jpg" 
  },
  { 
    name: "Dua Lipa", 
    image: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc" 
  },
  { 
    name: "Justin Bieber", 
    image: "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg" 
  },
  { 
    name: "Olivia Rodrigo", 
    image: "https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4" 
  },
  { 
    name: "Harry Styles", 
    image: "https://hips.hearstapps.com/hmg-prod/images/pchelenepambrun-resized-1576190436.jpg?resize=640:*7" 
  },
  { 
    name: "Lady Gaga", 
    image: "https://i.scdn.co/image/ab6761610000e5ebaadc18cac8d48124357c38e6" 
  },
  { 
    name: "Bad Bunny", 
    image: "https://media.elcomercio.com/wp-content/uploads/2025/01/Diseno-sin-titulo-2025-01-07T110718.796-1024x683.jpg" 
  },
  { 
    name: "Justin Timberlake", 
    image: "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2019/10/Justin-Timberlake-800x800.png" 
  },
 
];

function Home() {
  const [tracks, setTracks] = useState([
    { title: "Blinding Lights", artist: "The Weeknd", url: "/songs/The Weeknd - Blinding Lights (Official Audio).mp3" },
    { title: "Levitating", artist: "Dua Lipa", url: "/songs/Dua Lipa - Levitating Featuring DaBaby (Official Music Video).mp3" },
  ]);

  const handlePlaySong = (album) => {
    setTracks([{ title: album.title, artist: album.artist, url: album.url }]);
  };

  return (
    <div className="p-3">
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

      <div className="mt-4">
        <MusicPlayer tracks={tracks} />
      </div>
    </div>
  );
}

export default Home;