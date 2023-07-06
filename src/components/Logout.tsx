import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/auth';

const Logout: React.FC = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button id="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;