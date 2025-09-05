// src/pages/Home.jsx
import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";

function Home() {
  const { setTracks, setCurrentIndex } = useContext(MusicPlayerContext);

  // Álbumes Populares
  const albumsPopulares = [
    {
      title: "After Hours",
      artist: "The Weeknd",
      cover: "https://static.qobuz.com/images/covers/ab/up/ghsn05bq7upab_600.jpg",
      url: "/songs/The Weeknd - Blinding Lights (Official Audio).mp3",
    },
    {
      title: "Future Nostalgia",
      artist: "Dua Lipa",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bf-60.jpg",
      url: "/songs/Dua Lipa - Levitating Featuring DaBaby (Official Music Video).mp3",
    },
    {
      title: "Justice",
      artist: "Justin Bieber",
      cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
      url: "/songs/Justin Bieber - Justice.mp3",
    },
    {
      title: "SOUR",
      artist: "Olivia Rodrigo",
      cover: "https://akamai.sscdn.co/letras/360x360/albuns/6/0/d/a/1081701689003054.jpg",
      url: "/songs/Olivia Rodrigo - SOUR.mp3",
    },
    {
      title: "Fine Line",
      artist: "Harry Styles",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png",
      url: "/songs/Harry Styles - Fine Line.mp3",
    },
    {
      title: "Born This Way",
      artist: "Lady Gaga",
      cover: "https://i.scdn.co/image/ab67616d0000b2736d2bc35812c2d7f67d110e48",
      url: "/songs/Lady Gaga - Born This Way.mp3",
    },
  ];

  // Artistas Populares
  const artistasPopulares = [
    { name: "The Weeknd", image: "https://i1.sndcdn.com/avatars-hlvKdkpTrNN7RIgm-Pkvv0g-t240x240.jpg" },
    { name: "Dua Lipa", image: "https://i.scdn.co/image/ab67616d0000b273838698485511bd9108fadadc" },
    { name: "Justin Bieber", image: "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg" },
    { name: "Olivia Rodrigo", image: "https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4" },
    { name: "Harry Styles", image: "https://los40es00.epimg.net/especiales/los40-music-awards/2020/images/34.png" },
    { name: "Lady Gaga", image: "https://i.scdn.co/image/ab6761610000e5ebaadc18cac8d48124357c38e6" },
    { name: "Bad Bunny", image: "https://i.scdn.co/image/22590f4021a00d1cad0821cc46a54395960342ee" },
    { name: "Justin Timberlake", image: "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2019/10/Justin-Timberlake-800x800.png" },
  ];

  const handlePlaySong = (album) => {
    setTracks([album]);
    setCurrentIndex(0);
  };

  return (
    <div className="p-3">
      <h2>Álbumes Populares</h2>
      <Row className="g-3">
        {albumsPopulares.map((album, i) => (
          <Col key={i} xs={6} sm={4} md={3} lg={2}>
            <SongCard
              title={album.title}
              artist={album.artist}
              cover={album.cover}
              onClick={() => handlePlaySong(album)}
            />
          </Col>
        ))}
      </Row>

      <h2 className="mt-4">Artistas Populares</h2>
      <Row className="g-3">
        {artistasPopulares.map((artist, i) => (
          <Col key={i} xs={6} sm={4} md={3} lg={2}>
            <ArtistCard name={artist.name} image={artist.image} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
