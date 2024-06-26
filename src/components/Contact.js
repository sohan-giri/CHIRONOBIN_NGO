import React, { useRef } from 'react'; 
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ultvcub', 
      'template_dkp7haa', 
      form.current, {
        publicKey: 'tagCTxC3vXSiUcc-H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235848.1033279115!2d87.72730677812501!3d22.536929300000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029f1faf4b3b47%3A0x1da1875f0c0546a5!2sChiranabin%20NGO!5e0!3m2!1sen!2sin!4v1712955413934!5m2!1sen!2sin"
        width="500"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="txt" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
