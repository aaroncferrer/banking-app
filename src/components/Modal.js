import Modal from 'react-modal';
import './modal.css';

function ModalComponent(props){

    const {modalIsOpen, setModalIsOpen, inputValue, onInputChange, onTransaction} = props;

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
                top: '15%',
                left: '35%',
                right: '35%',
                bottom: '65%',
                border: 'none',
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
        </Modal>
        </>
    )
}

export default ModalComponent;
