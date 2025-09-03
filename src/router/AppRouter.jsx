import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileForm from "../pages/ProfileForm";
import Favoritos from "../pages/Favoritos";
import Workout from "../pages/Workout";
import Pop from "../pages/Pop";

function AppRouter() {
  return (
    <Routes>
      {/* Todas estas rutas usan el mismo layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/pop" element={<Pop />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
