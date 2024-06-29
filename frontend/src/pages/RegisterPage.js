import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [qualifications, setQualifications] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password, role, qualifications });
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
      <h2>Register</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
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
      {role === 'professor' && (
        <div className="form-group">
          <label>Qualifications</label>
          <input type="text" className="form-control" value={qualifications} onChange={(e) => setQualifications(e.target.value)} />
        </div>
      )}
      <button className="btn btn-primary" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
