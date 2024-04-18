import React, { useState, useCallback } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/MainCard';
import { AppProvider } from './AppProvider';

function App() {
  const [date, setDate] = useState(false);

  // Memoize the function passed as a prop to Header component
  const setDark = useCallback(() => {
    setDate(prevDate => !prevDate);
  }, []);
  

  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-lg-4 col-xl-4">
            {/* Pass memoized function to Header component */}
            <Header dark={date} setDark={setDark}></Header>
            
            {/* Pass state to Main component */}
            <AppProvider/>
            <Main dark={date}></Main>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
