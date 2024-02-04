
import React from 'react';

const Login = () => {
  return (
    
    <div className='form-container'>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    
  );
};

export default Login;
