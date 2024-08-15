import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
