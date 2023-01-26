import logo from './logo.svg';
import './App.css';
import SideLayout from './components/Layout';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Customers from './components/Customers';

function App() {
  return (
    <Router>
  <Routes>
    <Route path='/' exact element={<Customers/>}/>

  </Routes>
  </Router>
  );
}

export default App;
