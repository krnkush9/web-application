// importing all components and hooks
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { AppContext } from './Context/AppContext';


function App() {

  // Accepting fetch function from the AppContext using useContext Hook
  const { fetchData } = useContext(AppContext);

  // calling fetch function using the useEffect Hook
  // fetch function will call when the code will run
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="w-full h-full ">
            {/* Home components */}
        <Home />       
  
    </div>
  );
}

export default App;
