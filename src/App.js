// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/MainCard';


function App() {
  const [date, setDate] = useState(false);
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-lg-4 col-xl-4">
            <Header dark={date} setDark={setDate}></Header>
            
            <Main dark={date}></Main>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
