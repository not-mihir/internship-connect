import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpProfessor from './pages/SignUpProfessor';
import SignUpStudent from './pages/SignUpStudent';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/professor" element={<SignUpProfessor />} />
          <Route path="/signup/student" element={<SignUpStudent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
