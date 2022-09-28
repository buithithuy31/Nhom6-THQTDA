import React from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'

function Contact(props) {
    return (
        <div className='contact'>
            <h1>Get In Touch</h1>
            <p>Contact Me</p>
            <div className='contact__container'>
                <div className='contact__options'>
                    <div className='contact__option'>
                        <MdOutlineEmail/>
                        <h2>Email</h2>
                        <h3>buithithuy0307@gmail.com</h3>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <BiMessageRoundedDetail/>
                        <h2>Message</h2>
                        <h3>buithithuy0307@gmail.com</h3>
                        <a href="https://www.facebook.com/buithithuy.3103">Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <FaTwitter/>
                        <h2>Telegram</h2>
                        <h3>+84 929 1126</h3>
                        <a href="https://web.telegram.org/k/">Send a message</a>
                    </div>
                </div>
                <form action="">
                    <input type="text" name='text' placeholder='Your Full Nam' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name=""  rows="7" placeholder='Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;