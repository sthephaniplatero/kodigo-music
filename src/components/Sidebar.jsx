import React from 'react';

function Sidebar() {
  const playlists = ["Favoritos", "Workout", "Chill", "Pop", "Rock"];

  return (
    <aside className="col-12 col-md-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h6>Biblioteca</h6>
          <ul className="list-unstyled">
            {playlists.map((pl, i) => (
              <li key={i} className="py-1">{pl}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

// 🔹 Export default
export default Sidebar;
