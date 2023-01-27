import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import Modal from 'react-modal';

function SendMoney(){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div className="action-buttons send-money" onClick={() => setModalIsOpen(true)}>
            <span className="action-symbol">▶</span>
            <FontAwesomeIcon className='action-logo' icon={faDollarSign} />
            <span className='action-name'>Send Money</span>
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="modal-content">
                <input type="text" placeholder="Enter deposit amount" />
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
        </Modal>
        </>
    )
}

export default SendMoney;