import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
