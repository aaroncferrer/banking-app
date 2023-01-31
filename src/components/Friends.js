import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-modal';

function Friends(){

    const users = JSON.parse(localStorage.getItem('users'));
    const userNames = users.map(user => user.firstName);

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
            <div>
                {userNames.map((firstName, index) => (
                    <p key={index}>{firstName} {index}</p>
                ))}
            </div>
        </Modal>

        </>
    )
}

export default Friends;