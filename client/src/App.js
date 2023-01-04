import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SelectBox from "./components/SelectBox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <SelectBox />
    </div>
  );
}

export default App;
