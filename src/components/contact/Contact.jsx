import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {  useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rx6no8x', 'template_erk9anz', form.current, 'user_48hVyKTlrX9acp9YfLLpZ')
     e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

    <div className="container contact-container">
      <div className="conatact-options">
        <article className="contact-option">
        <HiOutlineMail className='contact-option-icon' />
        <h4>Email</h4>
        <h5>rohitbharti326452@gmail.com</h5>
        <a href="mailto:rohitbharti326452@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact-option className='contact-option-icon">
        <BsTwitter className='contact-option-icon'/>
        <h4>Twitter</h4>
        <h5>rohitbharti</h5>
        <a href="https://twitter.com/messages/compose "  target="_blank">Send a message</a>
        </article>

        <article className="contact-option">
        <BsWhatsapp className='contact-option-icon' />
        <h4>WhatsApp</h4>
        <h5>rohitbharti</h5>
        <a href="https://api.whatsapp.com/send?phone=9682571937"  target="_blank">Send a message</a>
        </article>
      </div>

    <form ref={form} onSubmit={sendEmail}>

      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>


    </div>

    </section>
  )
}

export default contact