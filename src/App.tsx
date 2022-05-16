import { Navigate, Route, Routes } from "react-router-dom";
import { BoredAPI } from "./components/BoredAPI";
import { DeckOfCards } from "./components/DeckOfCards";
import { Home } from "./components/Home";
import { TheMealDb } from "./components/TheMealDb";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bored-api" element={<BoredAPI />} />
      <Route path="/deck-of-cards" element={<DeckOfCards />} />
      <Route path="/the-meal-db" element={<TheMealDb />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
