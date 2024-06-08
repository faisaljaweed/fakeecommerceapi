import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import CardDescriptions from "../Components/CardDescriptions";
import EcommerceApi from "../Pages/EcommerceApi";

export default function Navigations() {
  return (
    <>
      <BrowserRouter basename="/fakeecommerceapi">
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<EcommerceApi />} />
          <Route path="/:id" element={<CardDescriptions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
