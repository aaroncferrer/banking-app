import './App.css';

import Dashboard from "./pages/Dashboard";
import LoginRegister from "./pages/LoginRegister";
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){

  // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // const [adminBalance, setAdminBalance] = useState(0);

  // const [adminBalance, setAdminBalance] = useState(JSON.parse(localStorage.getItem('currentUser')).adminBalance || 0);

  const [adminBalance, setAdminBalance] = useState(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).adminBalance : 0);

  return(
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={<LoginRegister adminBalance={adminBalance} setAdminBalance={setAdminBalance} />} />
        <Route exact path='/dashboard' element={<Dashboard adminBalance={adminBalance} setAdminBalance={setAdminBalance} />} />
      </Routes>
    </>
    </Router>
  )
}

export default App;