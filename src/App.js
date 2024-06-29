import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faculty1 from './pages/Faculty1';
import FacultyPage from './pages/FacultyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/faculty1" element={<Faculty1 />} />
        <Route path="/facultypage" element={<FacultyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
