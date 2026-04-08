import './App.css';
import './index.css';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/menu' element={<MenuPage />}/>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/reservation' element={<ReservationPage />}/>
          <Route path='/conformation' element={<ConfirmationPage />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
