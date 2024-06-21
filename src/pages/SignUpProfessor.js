import React, { useState } from 'react';

function SignUpProfessor() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [topics, setTopics] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle professor signup logic here
    console.log("Signing up professor with", email, password, name, topics);
  };

  return (
    <div>
      <h2>Sign Up - Professor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Topics of Interest:
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpProfessor;
