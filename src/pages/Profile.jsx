import React from "react";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "./App.css"; // importamos nuestro CSS personalizado

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <p className="text-center mt-5">Cargando...</p>;

  if (!user) {
    navigate("/"); // si no hay usuario, vuelve al Home
    return null;
  }

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // vuelve al Home
  };

  return (
    <div className="profile-container">
      <div className="card shadow profile-card">
        <div className="card-body text-center">
          <img
            src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"}
            alt="Avatar"
            className="rounded-circle mb-3 profile-avatar"
          />
          <h3 className="card-title mb-3">{user.displayName || "Sin nombre"}</h3>
          <p className="card-text"><strong>Correo:</strong> {user.email}</p>
          <p className="card-text"><strong>UID:</strong> {user.uid}</p>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
