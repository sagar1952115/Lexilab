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
  const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/:lang/:topic/test"
          element={user ? <Test /> : <Login />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/lang/:id" element={user ? <Language /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
