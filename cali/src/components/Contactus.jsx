import React, { useRef } from 'react';
import { useState } from 'react';
import { faPhone , faMobile , faEnvelope , faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import './Contactus.css';

const BASE_URL=process.env.REACT_APP_BACKEND_URL;

const Contactus = () => {
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await axios.post('https://caliberbackend.onrender.com/send-email', Object.fromEntries(formData));
      if (response.status === 200) {
        console.log("sucessfull")
        toast.success('Email sent successfully!');
        window.alert("Sent Successfully");
      } else {
        throw new Error('Failed to send email');
        window.alert("Error while processing");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      window.alert("Error while processing");
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
      <>
          <div className="contact-outer">
              <div className="contact-form">
                  <form onSubmit={sendEmail} ref={formRef}>
                      <input placeholder='Name' type="text" id="name" name="name"  required />
                      <input placeholder='Email' type="email" id="email" name="email"  required />
                      <input placeholder='Phone Number' type="number" id="phno" name="phno"  required />
                      <textarea className='conta' placeholder='Message....' id="message" name="message" required />
                      <button type="submit" value="Send">Send</button>
                  </form>
              </div>
    </div>
    </>
  )
}

export default Contactus;