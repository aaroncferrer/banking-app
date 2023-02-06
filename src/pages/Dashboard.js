import '../App.css';

// [FILE IMPORTS]
import Deposit from '../components/Deposit';
import SendMoney from '../components/SendMoney';
import Withdraw from '../components/Withdraw';
import Friends from '../components/Friends';
import { Link } from 'react-router-dom';
import Budget from '../components/Budget';

function Dashboard(props) {
  
  const {adminBalance, setAdminBalance, setExpenses} = props;

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // ------> Getting Date
  const date = new Date();
  const dayNumber = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');

  function handleLogout() {
    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(user => user.email === currentUser.email);
    user.adminBalance = currentUser.adminBalance;
    user.expenses = currentUser.expenses;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('currentUser');
  }

  return (
    <>
    <main className='dash-container'>
        <img src='./bank-logo.png' alt='Bank Logo' className='logo1' />
        

      <div className="main-dash">

      <h2 className='welcome'>Welcome, {currentUser.firstName}!</h2>
        
        <div className="main-dash-content">
        <div className="money-container">
          <h1 className="balance">${currentUser.adminBalance}.00</h1>
          <h4 className="acct-number">6353 7863 5274 9817</h4>
          <div className='money-footer'>
            <p className="date">{month}/{dayNumber}/{year}</p>
            <span className="card-type" style={{fontStyle: 'italic'}}>VISA</span>
          </div>
        </div>

        <div className="action-container">
          <Deposit adminBalance={adminBalance} setAdminBalance={setAdminBalance} />
          <SendMoney adminBalance={adminBalance} setAdminBalance={setAdminBalance}/>
          <Withdraw adminBalance={adminBalance} setAdminBalance={setAdminBalance}/>
          <Friends />
        </div>
        </div>

        <Budget adminBalance={adminBalance} setAdminBalance={setAdminBalance} setExpenses={setExpenses} />

        <button className='logout-btn' onClick={handleLogout}>
          <Link to='/' className='logout-link'>Logout</Link>
        </button>

      </div>
    </main>
    </>
  );
}

export default Dashboard;
