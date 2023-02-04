import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-modal';
import './friends.css';

function Friends(){

    const users = JSON.parse(localStorage.getItem('users'));

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return(
        <>
        <div className="action-buttons friends" onClick={openModal}>
            <FontAwesomeIcon className='action-logo' icon={faUserFriends} />
            <span className='action-name'>Friends</span>
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
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                height: '500px',
                width: '500px',
                background: '#f3e9e9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '20px 30px 30px'
                }
            }}
        >   
            <table className='friends-table'>
            <caption className='friends-caption'>Friends List</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>        
                {users.map((user, index) => (
                    <>
                    <tr className="table-row" key={index}>
                        <td className="table-cell name-cell">{user.firstName} {user.lastName}</td>
                        <td className="table-cell email-cell">{user.email}</td>
                    </tr>
                    </>
                ))}        
            </tbody>
            </table>

        </Modal>
        </>
    )
}

export default Friends;