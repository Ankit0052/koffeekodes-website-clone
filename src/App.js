import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { FireBass } from "./components/FireBass";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={<FireBass/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
