import React from "react";
import { Route, Routes } from "react-router-dom";

export const Master = () => {
  return (
    <Routes>
      <Route path="/" element={<>Master</>} />
    </Routes>
  );
};
