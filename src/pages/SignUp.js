import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <p>Select the type of user:</p>
      <Link to="/signup/professor">Professor</Link>
      <br />
      <Link to="/signup/student">Student</Link>
    </div>
  );
}

export default SignUp;
