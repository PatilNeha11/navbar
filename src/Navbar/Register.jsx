// Register.js
import React from 'react';

const Register = () => {
  return (
    
    <div className='form-container'>
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>

  );
};

export default Register;
