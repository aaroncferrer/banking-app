import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import ModalComponent from './ModalComponent';

function SendMoney(props){

    const [showSendMoney, setShowSendMoney] = useState(false);

    const [selectedUser, setSelectedUser] = useState('');
    const [amount, setAmount] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const users = JSON.parse(localStorage.getItem('users'));
    const {setAdminBalance} = props;

    const handleSelect = (e) => setSelectedUser(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);

    function onTransaction(e){
        e.preventDefault();

        // Get loggedIn in user from localStorage
        const sender = JSON.parse(localStorage.getItem('currentUser'));
        // Find receiver in users array from localStorage
        const receiver = users.find(user => user.email === selectedUser);

        if(!receiver){
            alert('Please select a recipient.');
            return
        } else if(sender.email === selectedUser){
            alert('Can\'t transfer to own account. Deposit or withdraw instead.');
        } else if(sender.adminBalance < amount){
            alert('Insufficient funds.');
        } else {
            sender.adminBalance -= +amount;
            receiver.adminBalance += +amount;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(sender))
            setAdminBalance(sender.adminBalance);
            setTimeout(() => alert('Money successfully sent!'), 175);
            setSelectedUser('');
            setAmount('');
        }
    }

    return (
        <>
        <div 
            className="action-buttons send-money" 
            onClick={() => {setModalIsOpen(true); setShowSendMoney(true)}}
        >
            <span className="action-symbol">▶</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Send Money</span>
        </div>

        <ModalComponent handleSelect={handleSelect} selectedUser={selectedUser} amount={amount} handleAmount={handleAmount} onTransaction={onTransaction} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} showSendMoney={showSendMoney} setShowSendMoney={setShowSendMoney} />

        </>
    )
}

export default SendMoney;