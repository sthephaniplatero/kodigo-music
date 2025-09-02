import React from "react";

function SongCard({ title, artist, cover, onClick }) {
  return (
    <div className="card m-2" style={{ width: "150px", cursor: "pointer" }} onClick={onClick}>
      <img src={cover} className="card-img-top" alt={title} />
      <div className="card-body p-2">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{artist}</p>
      </div>
    </div>
  );
}

export default SongCard;
