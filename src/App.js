import './App.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Customers from './components/Customers';
import Users from './components/Users';

function App() {
  return (
    <Router>
  <Routes>
    <Route path='/' exact element={<Customers/>}/>
    <Route path='/users' exact element={<Users/>}/>

  </Routes>
  </Router>
  );
}

export default App;
