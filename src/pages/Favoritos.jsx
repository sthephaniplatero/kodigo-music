// src/pages/Favoritos.jsx
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Favoritos.css";

const favoriteSongs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    img: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png",
  },
  {
    title: "Uptown Funk",
    artist: "Bruno Mars",
    img: "https://irishnumberones.com/wp-content/uploads/2025/05/mark_ronson_bruno_mars_uptown_funk.jpg?w=500",
  },
];

function Favoritos() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Mis Favoritos ❤️</h2>

      <Row>
        {favoriteSongs.map((song, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={song.img} alt={song.title} />
              <Card.Body>
                {/* Título: permite hasta 2 líneas */}
                <Card.Title className="song-title">{song.title}</Card.Title>

                {/* Artista: solo 1 línea */}
                <Card.Text className="song-artist">{song.artist}</Card.Text>

                <Button variant="danger">Quitar de Favoritos</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Favoritos;

