import './App.css';
import CardSection from './components/CardSection/CardSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <CardSection/>
        <div style={{height:"300px"}}></div>
    </div>
  );
}

export default App;
