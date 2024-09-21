import React from "react";
import { SignIn, HomePage } from "modules";
import { Route, Routes } from "react-router-dom";

export const Master = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
