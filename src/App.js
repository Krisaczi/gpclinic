import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import SignUp from "./Components/Sign_Up/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
