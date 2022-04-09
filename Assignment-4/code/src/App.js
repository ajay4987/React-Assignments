import React from 'react';
import Postview from './Postview';
import LandingPage from './loading-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postview" element={<Postview />} />
      </Routes>
    </BrowserRouter>
  );
}