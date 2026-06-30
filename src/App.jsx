import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddDonation from "./pages/AddDonation";
import DonorDashboard from "./pages/DonorDashboard";
import NGODashboard from "./pages/NGODashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import ImpactDashboard from "./pages/ImpactDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddDonation />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/ngo" element={<NGODashboard />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/impact" element={<ImpactDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;