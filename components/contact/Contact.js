import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import emailjs from 'emailjs-com'
import {useRef} from 'react'

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_os8t8mw','template_35ibw4j',form.current,'')
      e.target.reset();
   }


   return (
    <section id='contact'>
       <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

<div className='container contact_container'>
   <div className='contact_options'>
      <article className='contact_option'>
         <MdOutlineEmail className='contact_option-icon'/>
         <h4>Email</h4>
         <h5>lamichhaneranjan1@gmail.com</h5>
         <a href="mailto:dummyeo@gmail.com">Send a message</a>
      </article>
      <article className='contact_option'>
         <RiMessengerLine className='contact_option-icon'/>
         <h4>Messenger</h4>
         <h5>lamichhaneranjan1@gmail.com</h5>
         <a href="https://facebook.com/ranjan1">Send a message</a>
      </article>
      <article className='contact_option'>
         <SiWhatsapp className='contact_option-icon'/>
         <h4>WhatsApps</h4>
         <h5>+9779866097219</h5>
         <a href="https://api.whatsapp.com/send?phone+9779866097219">Send a message</a>
      </article>
   </div>
   {/* End of Contact Options*/}
 <form href={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your full Name' required/>
         <input type='email' name='email' placeholder='Your Email' requred/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
   </form>
</div>

    </section>
  )
   }
export default Contact