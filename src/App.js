import logo from './logo.svg';
import './App.css';
import BackGround from './components/BackGround';
import Header from './components/Header';
import BackGround2 from './components/BackGround2';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <BackGround /> */}
      <BackGround2 />
      <About />
    </div>
  );
}

export default App;
