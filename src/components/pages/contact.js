// Adding necessary imports
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../styles/contact.css';

// Setting useStates for name, email, message, errorMessage and successMessage
// and displaying header and contact form and messages for Contact page
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleMouseLeave = (e) => {
        setErrorMessage('');
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            if (!inputValue) {
                setErrorMessage('A name is required.')
            }
        }
        else if (inputType === 'email') {
            if (!inputValue) {
                setErrorMessage('An email is required.')
            }
        } else if (inputType === 'message') {
            if (!inputValue) {
                setErrorMessage('A message is required.')
            }
        } 
    };

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
        setName(inputValue);
        } else if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'message') {
        setMessage(inputValue);
        }
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!name) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!message) {
            setErrorMessage('Please enter a message.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
        setSuccessMessage('Thank you for your message, Megan will reach out soon.')
    };

    return (
        <div className='contact-div'>
            <h1 className='contact-header'>Contact Me</h1>
            <form className="form">
                <div className='form-group'>
                    <label for="nameInput">Name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter Name"
                        className='form-control'
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                
                <div className='form-group'>
                    <label for="emailInput">Email address</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Enter Email"
                        className='form-control'
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                
                <div className='form-group'>
                    <label for='messageInput'>Your Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                        className='form-control'
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <div className='btn-div'>
                    <button type="button" className='btn' onClick={handleFormSubmit}>Submit</button>
                </div>
                
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            {successMessage && (
                <div className="alert alert-success" role="alert">{successMessage}</div>
            )}
        </div>
    );
}

export default Contact;