import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/auth';
import { User } from '../types/user';
import '../styles/Login.ts';

const Login: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.login(user.email, user.password);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;