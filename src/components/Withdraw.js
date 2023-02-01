import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

import ModalComponent from './ModalComponent';

function Withdraw(props){

    const {setAdminBalance, adminBalance} = props;
    const [inputValue, setInputValue] = useState('');

    const onTransaction = () => {
        setAdminBalance(adminBalance - +inputValue);
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.adminBalance = adminBalance - +inputValue;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        setInputValue('');
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div className="action-buttons withdraw" onClick={() => setModalIsOpen(true)}>
            <span className="action-symbol">-</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Withdraw</span>
        </div>
        
        <ModalComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} inputValue={inputValue} onInputChange={onInputChange} onTransaction={onTransaction} />

        </>
    )
}

export default Withdraw;