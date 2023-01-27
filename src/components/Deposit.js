import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import Modal from 'react-modal';

function Deposit(props){

    const {setAdminBalance, adminBalance} = props;
    const [inputValue, setInputValue] = useState('');

    const onDeposit = () => {
        setAdminBalance(adminBalance + +inputValue);
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div className="action-buttons deposit" onClick={() => setModalIsOpen(true)}>
            <span className="action-symbol">+</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Deposit</span>
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="modal-content">
                <input type="text" placeholder="Enter amount to deposit" value={inputValue} onChange={onInputChange} />
                <button onClick={() => {onDeposit(); setModalIsOpen(false)}}>Deposit
                </button>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
        </Modal>
        </>
    )
}

export default Deposit;