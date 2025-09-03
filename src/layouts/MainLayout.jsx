import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container flex-grow-1 my-3">
        <div className="row">
          <Sidebar />
          <main className="col-12 col-md-9">
            <Outlet /> {/* Aquí se renderiza el contenido de cada página */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
