import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';

function App() {
  return (
    <div >
      <Navbar/>
      <Carousel/>
      <h1>This is the root component</h1>
    </div>
  );
}

export default App;
