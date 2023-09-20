import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Register from "./components/Register";
import "./App.css";
import Language from "./pages/Language";
import Test from "./pages/Test";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/:lang/:topic/test" element={<Test />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/lang/:id" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
