import React from 'react';
import SignUp from './components/SignUp';
import { auth } from './firebase';
import './App.css';

function App() {

  const logout = () => {
    auth.signOut();
    
  }

  return (
    <div className="App">
      <SignUp />
      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
