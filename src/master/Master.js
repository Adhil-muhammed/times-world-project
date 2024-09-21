import React from "react";
import { SignIn } from "modules";
import { Route, Routes } from "react-router-dom";

export const Master = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};
