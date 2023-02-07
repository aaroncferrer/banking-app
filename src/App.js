import './App.css';

import Dashboard from "./pages/Dashboard";
import LoginRegister from "./pages/LoginRegister";
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App(){

  const [adminBalance, setAdminBalance] = useState(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).adminBalance : 0);
  const [expenses, setExpenses] = useState(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).expenses : []);

  return(
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={<LoginRegister adminBalance={adminBalance} setAdminBalance={setAdminBalance} />} />
        <Route exact path='/dashboard' element={<Dashboard adminBalance={adminBalance} setAdminBalance={setAdminBalance} expenses={expenses} setExpenses={setExpenses} />} />
      </Routes>
      <Footer />
    </>
    </Router>
  )
}

export default App;