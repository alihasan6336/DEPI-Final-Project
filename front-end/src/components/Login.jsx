import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
            <span className="bg-animate"></span>
            <span className="bg-animate2"></span>

            <div className="form-box login">
                <h2 className="animation" style={{ '--data': 0 }}>Login</h2>
                <form action="#">
                    <div className="input-box animation" style={{ '--data': 1 }}>
                        <input type="text" placeholder="" required />
                        <label>Username</label>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                    </div>

                    <div className="input-box animation" style={{ '--data': 3 }}>
                        <input type="password" placeholder="" required />
                        <label>Password</label>
                        <FontAwesomeIcon className='icon' icon={faLock} />
                    </div>

                    <button type="submit" className="btn animation" style={{ '--data': 4 }}>Login</button>

                    <div className="reg-link animation" style={{ '--data': 4 }}>
                        <p>Don't have an account? <a href="#" className="signup-link" onClick={() => setIsActive(true)}>Sign Up</a></p>
                    </div>
                </form>
            </div>

            <div className="info-text login">
                <h2 className="animation" style={{ '--data': 0 }}>Welcome Back!</h2>
                <p className="animation" style={{ '--data': 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="form-box signup">
                <h2 className="animation">Sign Up</h2>
                <form action="#">
                    <div className="input-box animation" style={{ '--data': 17 }}>
                        <input type="text" placeholder="" required />
                        <label>Username</label>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                    </div>

                    <div className="input-box animation" style={{ '--data': 18 }}>
                        <input type="email" placeholder="" required />
                        <label>Email</label>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                    </div>

                    <div className="input-box animation" style={{ '--data': 19 }}>
                        <input type="password" placeholder="" required />
                        <label>Password</label>
                        <FontAwesomeIcon className='icon' icon={faLock} />
                    </div>

                    <button type="submit" className="btn animation" style={{ '--data': 20 }}>Sign Up</button>

                    <div className="reg-link animation" style={{ '--data': 21 }}>
                        <p>Already have an account? <a href="#" className="login-link" onClick={() => setIsActive(false)}>Login</a></p>
                    </div>
                </form>
            </div>

            <div className="info-text signup">
                <h2 className="animation" style={{ '--data': 22 }}>Welcome Back!</h2>
                <p className="animation" style={{ '--data': 23 }}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    );
};

export default Login;
