import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfessorProfile from './pages/ProfessorProfile';
import StudentProfile from './pages/StudentProfile';
import InternshipList from './pages/InternshipList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/professor-profile" component={ProfessorProfile} />
        <Route path="/student-profile" component={StudentProfile} />
        <Route path="/internships" component={InternshipList} />
      </Switch>
    </Router>
  );
}

export default App;
