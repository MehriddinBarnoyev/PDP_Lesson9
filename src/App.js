// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/MainCard';


function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 col-lg-4 col-xl-4">
            <Header></Header>
            <Main></Main>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
