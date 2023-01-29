import './App.css';

import Dashboard from "./pages/Dashboard";
import LoginRegister from "./pages/LoginRegister";
import { useState } from 'react';

function App(){

  const [adminBalance, setAdminBalance] = useState(0);

  return(
    <>
      <LoginRegister adminBalance={adminBalance} />
      {/* <Dashboard adminBalance={adminBalance} setAdminBalance={setAdminBalance} /> */}
    </>
  )
}

export default App;