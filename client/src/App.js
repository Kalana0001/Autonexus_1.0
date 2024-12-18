import logo from './logo.svg';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Navbar_Landing } from './components/Navbar_Landing/Navbar_Landing';
import Footer from './components/Footer/Footer';
import Page01 from './components/Page01/Page01';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Page01/>
      <Footer/>
    </div>
  );
}

export default App;
