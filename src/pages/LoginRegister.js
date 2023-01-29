import './LoginRegister.css';
import { useState } from 'react';
import Modal from 'react-modal';


function LoginRegister(){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     const firstName = e.target.elements.firstName.value;
    //     const lastName = e.target.elements.lastName.value;
    //     const email = e.target.elements.email.value;
    //     const password = e.target.elements.password.value;

    //     const emailExists = users.find(user => user.email === email);
    //     if(emailExists){
    //         return alert('Email is already used.');
    //     }

    //     const newUser = {firstName, lastName, email, password};
    //     users.push(newUser);
    //     setUsers([...users]);

    //     localStorage.setItem('users', JSON.stringify(users));
    //     closeModal();
    // }   
    
    function handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }

        const emailExists = users.find(user => user.email === newUser.email);
        if(emailExists){
            return alert('Email is already used.');
        }

        users.push(newUser);
        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
        closeModal();
    }

    return(
        <>
        <main className='container'>
        <img src='./bank-logo.png' alt='Bank Logo' className='bank-logo' />
        <h2 className='login-header'>Welcome to Avion Bank!</h2>

        <div className="input-container">
            <input type='text' placeholder='Enter username' className='username input-fields'></input>
            <input type='text' placeholder='Enter password' className='password input-fields'></input>
        </div>

        <div>
        <button className='login-btn'>Log In</button>
        </div>

        <p className='login-text'>Don't have an account? <span className='sign-up' onClick={openModal}>Sign up!</span></p>
        </main>

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
                top: '15%',
                left: '35%',
                right: '35%',
                bottom: '10%',
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name='firstName' required placeholder='Enter your first name'/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name='lastName' required placeholder='Enter your last name'/>
                </label>
                <label>
                    Email:
                    <input type="email" name='email' required placeholder='Enter your email'/>
                </label>
                <label>
                    Password:
                    <input type="password" name='password' required placeholder='Enter your password'/>
                </label>

                <button>Submit</button>
            </form>
        </Modal>
        </>
    )
}

export default LoginRegister;