import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Carnivore from "./components/types/carnivore/Carnivore";
import Ominivore from "./components/types/ominivore/Ominivore";
import Pollotarians from "./components/types/pollotarians/Pollotarians";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ominivore />} />
          <Route path="/carnivore" element={<Carnivore />} />
          <Route path="/pollotarians" element={<Pollotarians />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
