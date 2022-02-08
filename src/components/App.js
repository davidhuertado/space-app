import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import backgroundHomeMobile from '../assets/home/background-home-mobile.jpg';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
