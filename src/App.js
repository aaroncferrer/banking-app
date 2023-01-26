import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
    <main>
      <div className="header-container">
        <img src='./bank-logo.png' alt='Bank Logo' className='logo1' />
        {/* <span className='logo2'>logo here</span> */}
      </div>

      <div className="main-dash">
      
        <div className="money-container">
          <h1 className="balance">$0.00</h1>
          <h4 className="acct-number">6353 7863 5274 9817</h4>
          <div className='money-footer'>
            <p className="date">01/26</p>
            <span className="card-type">VISA</span>
          </div>
        </div>

        <div className="action-container">
          <div className="action-buttons deposit">
            <span className="action-symbol">+</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Deposit</span>
          </div>
          <div className="action-buttons send-money">
            <span className="action-symbol">▶</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Send Money</span>
          </div>
          <div className="action-buttons withdraw">
            <span className="action-symbol">─</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Withdraw</span>
          </div>
          <div className="action-buttons friends">
            <FontAwesomeIcon className='action-logo' icon={faUserFriends} />
            <span className='action-name'>Friends</span>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}

export default App;
