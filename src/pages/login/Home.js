import React, { useState } from 'react';

const Home = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className='main-container'>
                <h1 className='welcome-title'>Login Page</h1>
                <input type='text' className='username-input'></input>
                <input className='password-input'></input>
                <button className='log-in-btn'>Log in</button>
                <button className='register-btn'>Register</button>
                
            </div>
            
        </>
    )
}
export default Home;