// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar'
import Simulation from './components/Simulation';
// import KeypairState from './components/contexts/keypair/keypairState';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/simulation" element={<Simulation />} />
          {/* <Route exact path="/notes" element={} /> */}

        </Routes>
      </Router>


    </>
  );
}

export default App;
