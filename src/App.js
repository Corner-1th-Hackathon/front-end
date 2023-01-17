import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import WritePage from "./pages/WritePage";
import TagPage from "./pages/TagPage";
import RabbitsPage from "./pages/RabbitsPage";

import JanPage from "./pages/AlbumMain/JanPage";
import FebPage from "./pages/AlbumMain/FebPage";
import MarPage from "./pages/AlbumMain/MarPage";
import AprPage from "./pages/AlbumMain/AprPage";
import MayPage from "./pages/AlbumMain/MayPage";
import JunPage from "./pages/AlbumMain/JunPage";
import JulPage from "./pages/AlbumMain/JulPage";
import AugPage from "./pages/AlbumMain/AugPage";
import SepPage from "./pages/AlbumMain/SepPage";
import OctPage from "./pages/AlbumMain/OctPage";
import NovPage from "./pages/AlbumMain/NovPage";
import DecPage from "./pages/AlbumMain/DecPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/rabbits" element={<RabbitsPage />} />

          <Route path="/jan" element={<JanPage />} />
          <Route path="/feb" element={<FebPage />} />
          <Route path="/mar" element={<MarPage />} />
          <Route path="/apr" element={<AprPage />} />
          <Route path="/may" element={<MayPage />} />
          <Route path="/jun" element={<JunPage />} />
          <Route path="/jul" element={<JulPage />} />
          <Route path="/aug" element={<AugPage />} />
          <Route path="/sep" element={<SepPage />} />
          <Route path="/oct" element={<OctPage />} />
          <Route path="/nov" element={<NovPage />} />
          <Route path="/dec" element={<DecPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
