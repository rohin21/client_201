import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AddStudent from "./pages/AddStudent";
import ListAll from "./pages/ListAll";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/all" element={<ListAll />} />
        <Route path="/info" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
