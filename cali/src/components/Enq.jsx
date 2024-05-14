// Enq.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Eo from './Enq.module.css'; // Import your CSS module

function Enq() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    business: '',
    project: '',
    webkind: '',
    webtype: '',
    backend: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://caliberbackend.onrender.com/send-enquiry', formData);
      alert('Enquiry sent successfully');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        business: '',
        project: '',
        webkind: '',
        webtype: '',
        backend: '',
        budget: '',
      });
    } catch (error) {
      console.error('Error sending enquiry:', error);
      alert('An error occurred while sending the enquiry');
    }
  };

  return (
    <div className={Eo.form}>
      <h1 className={Eo.h1}>Caliber Tech</h1>
      <form onSubmit={handleSubmit}>
        <div className={Eo.main}>
          <div className={Eo.background}>
            <div className={Eo.form1}>
              <div className={Eo.lable}>
                <label>Name:</label>
                <input
                  className={Eo.inp}
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={Eo.lable}>
                <label>Email ID:</label>
                <input
                  className={Eo.inp}
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={Eo.lable}>
                <label>Phone Number:</label>
                <input
                  className={Eo.inp}
                  placeholder="Your Mobile Number"
                  name="phone"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={Eo.lable}>
                <label>Business Type:</label>
                <select
                  className={Eo.select}
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Retail">Retail</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Service">Service</option>
                </select>
              </div>
              <div className={Eo.lable}>
                <label>Business Description:</label><br/>
                <textarea
                  className={Eo.inp1}
                  placeholder="Business Description"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={Eo.form2}>
              <div className={Eo.lable}>
                <label>Description about the project:</label><br/>
                <textarea
                  className={Eo.inp1}
                  placeholder="Project Description"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>
              <div className={Eo.lable}>
                <label>Single / Multiple Page Website:</label>
                <select
                  className={Eo.select}
                  name="webkind"
                  value={formData.webkind}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Multiple">Multiple</option>
                </select>
              </div>
              <div className={Eo.lable}>
                <label>Static / Dynamic Website:</label>
                <select
                  className={Eo.select}
                  name="webtype"
                  value={formData.webtype}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Static">Static</option>
                  <option value="Dynamic">Dynamic</option>
                </select>
              </div>
              <div className={Eo.lable}>
                <label>With Backend / Without Backend:</label>
                <select
                  className={Eo.select}
                  name="backend"
                  value={formData.backend}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="With Backend">With Backend</option>
                  <option value="Without Backend">Without Backend</option>
                </select>
              </div>
              <div className={Eo.lable}>
                <label>Your Budget:</label>
                <input
                  className={Eo.inp}
                  placeholder="Enter your budget"
                  name="budget"
                  type="number"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Eo.bbt}>
          <button className={Eo.btn} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Enq;
