import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import FormInput from "./Form/Form";
import { Route, Routes } from "react-router-dom";

const RootComponent = () => {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/form" element={<FormInput />} />
    </Routes>
  );
};

export default RootComponent;
