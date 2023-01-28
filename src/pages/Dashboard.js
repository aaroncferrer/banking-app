import '../App.css';

// [FILE IMPORTS]
import Deposit from '../components/Deposit';
import SendMoney from '../components/SendMoney';
import Withdraw from '../components/Withdraw';
import Friends from '../components/Friends';
import { useState } from 'react';

function Dashboard() {

  const [adminBalance, setAdminBalance] = useState(0);

  return (
    <>
    <main className='dash-container'>
      <div className="header-container">
        <img src='./bank-logo.png' alt='Bank Logo' className='logo1' />
        {/* <span className='logo2'>logo here</span> */}
      </div>

      <div className="main-dash">
      
        <div className="money-container">
          <h1 className="balance">${adminBalance}.00</h1>
          <h4 className="acct-number">6353 7863 5274 9817</h4>
          <div className='money-footer'>
            <p className="date">01/26</p>
            <span className="card-type">VISA</span>
          </div>
        </div>

        <div className="action-container">
          <Deposit adminBalance={adminBalance} setAdminBalance={setAdminBalance} />
          <SendMoney />
          <Withdraw adminBalance={adminBalance} setAdminBalance={setAdminBalance}/>
          <Friends />
        </div>

      </div>
    </main>
    </>
  );
}

export default Dashboard;
