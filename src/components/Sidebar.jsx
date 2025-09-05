// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const playlists = ["Favoritos", "Workout", "Pop"];

  return (
    <aside className="col-12 col-md-3 mb-4">
      <div className="card">
        <div className="card-body">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-3">
              <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
            </ol>
          </nav>

          {/* Playlists */}
          <ul className="list-unstyled">
            {playlists.map((pl, i) => (
              <li key={i} className="py-1">
                <Link to={`/${pl.toLowerCase()}`} className="text-decoration-none">
                  {pl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
