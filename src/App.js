import React from 'react';
<<<<<<< Updated upstream
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { Routes, Route } from 'react-router-dom';
import './App.scss';
>>>>>>> Stashed changes
import FacultyPage from './pages/FacultyPage';

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <FacultyPage/>
=======

      <Routes>
        <Route path="/facultypage" element={<FacultyPage />} />
      </Routes>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
