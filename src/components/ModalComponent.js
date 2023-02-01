import Modal from 'react-modal';
import './modal.css';

function ModalComponent(props){

    const {modalIsOpen, setModalIsOpen, inputValue, onInputChange, onTransaction, handleSelect, selectedUser, amount, handleAmount, handleSubmit, showSendMoney} = props;

    const users = JSON.parse(localStorage.getItem('users'));

    return(
        <>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            portalClassName='modal'

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
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '150px',
                width: '400px',
                background: '#f3e9e9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '0px'
                }
            }}
        >
            <div className="modal-content">

                <div className="send-money" style={{display: showSendMoney ? 'block' : 'none'}}>
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
                </div>
                
                <div className="deposit-withdraw" style={{display: showSendMoney && 'none'}}>
                <input 
                    type="text" 
                    className='modal-input' 
                    placeholder="Enter amount" 
                    value={inputValue} 
                    onChange={onInputChange} 
                    onKeyDown={(e) => e.key === 'Enter' ? (onTransaction(), setModalIsOpen(false)) : null} 
                />
                <div className="modal-btns-container">
                    <button className='modal-btns' onClick={() => {onTransaction(); setModalIsOpen(false)}}>
                        Enter
                    </button>
                    <button className='modal-btns' onClick={() => setModalIsOpen(false)}>
                        Close
                    </button>
                </div>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default ModalComponent;