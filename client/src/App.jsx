import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signup" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
