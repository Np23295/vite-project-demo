import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <button>LogIn</button>
      ) }
    </>
  );
}

export default App
