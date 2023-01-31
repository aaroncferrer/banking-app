import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import { useState } from 'react';

function SendMoney(props){

    const [selectedUser, setSelectedUser] = useState('');
    const [amount, setAmount] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const users = JSON.parse(localStorage.getItem('users'));
    const {setAdminBalance} = props;

    const handleSelect = (e) => setSelectedUser(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    function handleSubmit(e){
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
        <div className="action-buttons send-money" onClick={openModal}>
            <span className="action-symbol">▶</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Send Money</span>
        </div>

        <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        style={{
                overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
                },
                content: {
                position: 'absolute',
                height: '500px',
                width: '350px',
                background: '#f3e9e9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '0px'
                }
            }}
        >   
            <form onSubmit={handleSubmit}>
                <select onChange={handleSelect} value={selectedUser}>
                    <option value=''>Select a user</option>
                    {users.map(user => (
                        <option key={user.email} value={user.email}>{user.firstName}</option>
                    ))}
                </select>
                <input type="text" value={amount} onChange={handleAmount} placeholder="Enter amount" />
                <button type="submit">Send</button>
            </form>
        </Modal>
        </>
    )
}

export default SendMoney;