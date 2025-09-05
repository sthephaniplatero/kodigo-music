import React from "react";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // CSS personalizado

const lastPlayedSongs = [
  { title: "Blinding Lights", artist: "The Weeknd", cover: "https://static.qobuz.com/images/covers/ab/up/ghsn05bq7upab_600.jpg" },
  { title: "Levitating", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bf-60.jpg" },
  { title: "Shape of You", artist: "Ed Sheeran", cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png" },
];

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-5">Cargando...</p>;
  if (!user) {
    navigate("/");
    return null;
  }

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="profile-container container py-4">
      <div className="card shadow profile-card mb-4">
        <div className="card-body text-center">
          <img
            src={
              user.photoURL ||
              "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
            }
            alt="Avatar"
            className="rounded-circle mb-3 profile-avatar"
          />
          <h3 className="card-title mb-2">{user.displayName || "Sin nombre"}</h3>
          <p className="card-text"><strong>Correo:</strong> {user.email}</p>
          <p className="card-text"><strong>Tipo de cuenta:</strong> {user.isPremium ? "Premium" : "Estándar"}</p>
          <p className="card-text"><strong>Último inicio de sesión:</strong> {user.metadata?.lastSignInTime || "No disponible"}</p>
          <button className="btn btn-primary mt-3 profile-logout-btn" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <h4 className="mb-3">Últimas canciones reproducidas 🎵</h4>
      <div className="row">
        {lastPlayedSongs.map((song, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card h-100 shadow-sm song-card">
              <img src={song.cover} alt={song.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text">{song.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
