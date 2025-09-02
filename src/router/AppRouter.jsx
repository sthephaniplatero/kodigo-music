import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileForm from "../pages/ProfileForm";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-form" element={<ProfileForm />} />
    </Routes>
  );
}

export default AppRouter;
