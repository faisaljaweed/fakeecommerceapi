import { BrowserRouter, Routes,Route, } from "react-router-dom";
import CardDescriptions from "../Components/CardDescriptions";
import EcommerceApi from "../Pages/EcommerceApi";



export default function Navigations() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<EcommerceApi/>}/>
  <Route path="/:id" element={<CardDescriptions/>}/>
</Routes>
</BrowserRouter>
  )
}
