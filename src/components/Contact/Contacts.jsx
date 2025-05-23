import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","928d7042-e7ac-4ddd-b348-86d62f6f265c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional serivece to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 123-456-7890</li>
          <li><img src={location_icon} alt="" /> Address</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' placeholder='Enter you name' required />
          <label htmlFor="phone">Phone number</label>
          <input type="number" name='phone' placeholder='Enter you phone number' required />
          <label htmlFor="message">Message</label>
          <textarea name="message" rows='6' placeholder='Enter your message here'></textarea>
          <button className='btn btn-dark'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contacts