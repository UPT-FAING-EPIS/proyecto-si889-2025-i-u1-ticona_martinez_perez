// src/App.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  // Redirige según el estado de autenticación
  return user ? <Navigate to="/admin" /> : <Navigate to="/login" />;
}

export default App;