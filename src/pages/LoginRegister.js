import './loginRegister.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Navigate } from 'react-router-dom';

function LoginRegister(props){

    const {setAdminBalance} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    function handleLogin(e) {
        e.preventDefault();

        const user = users.find(user => user.email === email && user.password === password);

        if(!user){
            return alert('Incorrect email or password. Please try again.')
        }
        setCurrentUser(user);
        setAdminBalance(user.adminBalance);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            adminBalance: +e.target.elements.deposit.value,
            expenses: [],
        }

        const emailExists = users.find(user => user.email === newUser.email);
        if(emailExists){
            return alert('Email is already used.');
        }

        users.push(newUser);
        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
        closeModal();
        setTimeout(() => alert('User successfully registered.'), 175);
    }

    return(
        
        (currentUser !== null) ?
        <Navigate to='/dashboard' />

        :
        
        <>
        <main className='container'>
        <img src='./bank-logo.png' alt='Bank Logo' className='bank-logo' />
        <h2 className='login-header'>Welcome to Avion Bank!</h2>

        <form onSubmit={handleLogin}>
            <div className="input-container">
                <input 
                    type='email' 
                    placeholder='Enter email' 
                    className='email input-fields'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                >
                </input>
                <input 
                    type='password' 
                    placeholder='Enter password' 
                    className='password input-fields'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                >
                </input>
            </div>

            <div>
            <button className='login-btn' onClick={handleLogin}>Log In</button>
            </div>
        </form>

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
                top: '10%',
                left: '35%',
                right: '35%',
                bottom: '15%',
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
            <div className="reg-container">
                <h2 className='reg-header'>REGISTRATION FORM</h2>
                <form className='reg-form' onSubmit={handleSubmit}>
                    <label className='reg-label'>
                        First Name:
                        <input autoFocus type="text" name='firstName' className='reg-input' required placeholder='Enter your first name'/>
                    </label>
                    <label className='reg-label'>
                        Last Name:
                        <input type="text" name='lastName' className='reg-input' required placeholder='Enter your last name'/>
                    </label>
                    <label className='reg-label'>
                        Email:
                        <input type="email" name='email' className='reg-input' required placeholder='Enter your email'/>
                    </label>
                    <label className='reg-label'>
                        Password:
                        <input type="password" name='password' className='reg-input' required placeholder='Enter your password'/>
                    </label>
                    <label className='reg-label'>
                        Initial Deposit:
                        <input type="text" name='deposit' className='reg-input' required placeholder='Enter your initial deposit'/>
                    </label>

                    <button className='reg-btn'>Submit</button>
                </form>
            </div>
        </Modal>
        </>
    )
}

export default LoginRegister;