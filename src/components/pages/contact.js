import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
        setSuccessMessage('Thank you for your message, Megan will reach out soon.')
    };

    return (
        <div>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
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