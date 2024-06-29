import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', { email, password, role });
      localStorage.setItem('token', response.data.token);
      // Redirect based on role
      if (role === 'professor') {
        window.location.href = '/professor-profile';
      } else {
        window.location.href = '/student-profile';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Role</label>
        <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
