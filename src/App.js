import './App.css';
import LoginHome from './Components/LoginHome/LoginHome';
import Layout from './Components/MainPage/Layout';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">

    {
      localStorage.getItem("user")==undefined ? <LoginHome/> : <span><NavBar/><Layout/></span>
    }

      
      
      
      
    </div>
  );
}

export default App;
