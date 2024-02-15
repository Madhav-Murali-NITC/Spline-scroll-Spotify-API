import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Spotify from "./pages/Spotify";

function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path ="/spotify" element = {<Spotify />} />
      
    </Routes>
    </>
  );
}
export default App;
