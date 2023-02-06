import Modal from 'react-modal';
import './modal.css';

function ModalComponent(props){

    const {modalIsOpen, setModalIsOpen, inputValue, onInputChange, onTransaction, handleSelect, selectedUser, amount, handleAmount, showSendMoney, showBudget, expenseValue, setExpenseValue, costValue, setCostValue, showEdit, editExpense} = props;

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

                <div className="budget-modal" style={{display: showBudget ? 'block' : 'none'}}>
                    <form className='budget-form' onSubmit={onTransaction}>
                        <h2 className="budget-form-header">Add Expense</h2>
                        <input 
                            type='text'
                            name='expense'
                            className='budget-input' 
                            placeholder='Input expense'
                            value={expenseValue} 
                            onChange={e => setExpenseValue(e.target.value)}
                            required
                        />
                        <input 
                            type='text'
                            name='cost'
                            className='budget-input' 
                            placeholder='Input cost'
                            value={costValue} 
                            onChange={e => setCostValue(e.target.value)}
                            required
                        />
                    </form>
                </div>

                <div className="edit budget-modal" style={{display: showEdit ? 'block' : 'none'}}>
                    <form className='edit budget-form'>
                        <h2 className="edit budget-form-header">Edit Expense</h2>
                        <input 
                            type='text'
                            name='expense'
                            className='edit budget-input' 
                            placeholder='Input expense'
                            value={expenseValue} 
                            onChange={e => setExpenseValue(e.target.value)}
                            required
                        />
                        <input 
                            type='text'
                            name='cost'
                            className='edit budget-input' 
                            placeholder='Input cost'
                            value={costValue} 
                            onChange={e => setCostValue(e.target.value)}
                            required
                        />
                    </form>

                    <div className="modal-btns-container">
                        <button className='modal-btns' onClick={(index) => {editExpense(index)}}>
                        Enter
                        </button>
                        <button className='modal-btns' onClick={() => setModalIsOpen(false)}>
                        Close
                        </button>
                    </div>
                </div>

                <div className="send-modal" style={{display: showSendMoney ? 'block' : 'none'}}>
                    <form className='send-form' onSubmit={onTransaction}>
                        <select className='send-select' onChange={handleSelect} value={selectedUser}>
                            <option className='send-money-option' value=''>Select a user</option>
                            {users.map(user => (
                                <option className='send-money-option' key={user.email} value={user.email}>{user.firstName}</option>
                            ))}
                        </select>
                        <input className='send-input' type="text" value={amount} onChange={handleAmount} placeholder="Enter amount" />
                    </form>
                </div>
                
                <div className="deposit-withdraw" style={{display: showSendMoney || showBudget || showEdit ? 'none' : 'block'}}>
                <input 
                    type="text" 
                    className='modal-input' 
                    placeholder="Enter amount" 
                    value={inputValue} 
                    onChange={onInputChange} 
                    onKeyDown={(e) => e.key === 'Enter' ? (onTransaction(), setModalIsOpen(false)) : null} 
                />
                </div>
                <div className="modal-btns-container" style={{display: showEdit && 'none'}}>
                    <button className='modal-btns' onClick={(e) => {onTransaction(e); setModalIsOpen(false)}}>
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