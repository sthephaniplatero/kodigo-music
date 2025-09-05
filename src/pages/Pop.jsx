// src/pages/Pop.jsx
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const popSongs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    img: "https://i1.sndcdn.com/artworks-Eke4dWZTIrXCkXPW-hX2ihg-t1080x1080.jpg",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    img: "https://images.genius.com/4136ca8f6c03bd2fbc30c8d75407de75.1000x1000x1.png",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    img: "https://i1.sndcdn.com/artworks-WqbniiYjwLm0ctDW-hay3MA-t500x500.jpg",
  },
];

function Pop() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Pop Hits 🎶</h2>
      

      <Row>
        {popSongs.map((song, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={song.img} alt={song.title} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist}</Card.Text>
                <Button variant="primary">Reproducir</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Pop;
