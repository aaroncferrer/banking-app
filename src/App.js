import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
    <main>
      <div className="header-container">
        <span className='logo1'>avionbank</span>
        <span className='logo2'>logo here</span>
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
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Deposit</span>
          </div>
          <div className="action-buttons send-money">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Send Money</span>
          </div>
          <div className="action-buttons withdraw">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Withdraw</span>
          </div>
          <div className="action-buttons friends">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Friends</span>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
