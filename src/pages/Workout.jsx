// src/pages/Workout.jsx
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const workoutSongs = [
  {
    title: "Eye of the Tiger",
    artist: "Survivor",
    img: "https://cdn-images.dzcdn.net/images/cover/cf56b6d36a0d608c860e85cb6d322228/1900x1900-000000-81-0-0.jpg",
  },
  {
    title: "Stronger",
    artist: "Kanye West",
    img: "https://i1.sndcdn.com/artworks-iXdEDujhqre3qN0m-kHGIhw-t1080x1080.jpg",
  },
  {
    title: "Till I Collapse",
    artist: "Eminem",
    img: "https://i1.sndcdn.com/artworks-Bn6tGsMmwL0HVlAU-HKnA9g-t1080x1080.jpg",
  },
];

function Workout() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Workout Playlist 💪</h2>
      

      <Row>
        {workoutSongs.map((song, index) => (
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

export default Workout;
