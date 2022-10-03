import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/Shop';
import TeamsPage from './pages/Teams';
import InfoPage from './pages/MoreInfo';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar style={{position: 'absolute'}}/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shops" element={<ShopPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
