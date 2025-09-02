import React from "react";

function ArtistCard({ name, image }) {
  return (
    <div className="card m-2" style={{ width: "120px" }}>
      <img src={image} className="card-img-top rounded-circle" alt={name} />
      <div className="card-body p-2 text-center">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
