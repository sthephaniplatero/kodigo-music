import React from "react";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
