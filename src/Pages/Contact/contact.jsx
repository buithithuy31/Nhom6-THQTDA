import React from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import './contact.scss'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact(props) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rf9l1js', 'template_mtypnya', form.current, 'xThaqrqqYCPi8tEht')
      e.target.reset()
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
       
    };
    return (
        <div className='contact'>
            <h1>Get In Touch</h1>
            <p>Contact Me</p>
            <div className='contact__container'>
                <div className='contact__options'>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h2>Email</h2>
                        <h3>buithithuy0307@gmail.com</h3>
                        <div className='contact__option-link'>
                        <a href="https://mail.google.com/mail">Send a message</a>
                        </div>
                    </div>
                    <div className='contact__option'>
                        <BiMessageRoundedDetail className='contact__option-icon'/>
                        <h2>Message</h2>
                        <h3>buithithuy0307</h3> 
                        <div className='contact__option-link'>
                        <a href="https://www.facebook.com/buithithuy.3103">Send a message</a>
                        </div>
                    </div>
                    <div className='contact__option'>
                        <FaTwitter className='contact__option-icon'/>
                        <h2>Telegram</h2>
                        <h3>+84 929 1126</h3>
                        <div className='contact__option-link'>
                        <a href="https://web.telegram.org/k/">Send a message</a>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='form__input' type="text" name='name' placeholder='Your Full Name' required />
                    <input className='form__input' type="email" name='email' placeholder='Email' required />
                    <textarea name="message"  rows="7" placeholder='Message' required></textarea>
                    <button type='submit' className='button'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;