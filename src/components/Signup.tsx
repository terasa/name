import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/auth';
import { User } from '../types/user';
import '../styles/Signup.ts';

const Signup: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await auth.signup(user.email, user.password);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="signup-form">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;