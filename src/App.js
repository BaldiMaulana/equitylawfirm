import './App.css';
import Nav from './components/Nav';
import Page from './components/Page';
import About from './components/About';
import Team from './components/Partner/Team';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Page />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
