import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

   
    const payload = {
      ...formData,
      access_key: "f9eed6fd-fdbc-412e-bd69-e8b344b3d009"
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }
  };

  return (
    <div className='contact-container'>
      <div className="contact-title">
        <h1>Contact Us</h1>
        {success && <p className="success-text">Your message has been sent.</p>}
        
        <form onSubmit={onSubmit} className="contact-right">
        <div className='contact-top'>
          <input
            type="text"
            placeholder="Name"
            name='name'
            value={formData.name}
            onChange={onChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={onChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <textarea
            name="message"
            rows="8"
            placeholder='How can we help you?'
            value={formData.message}
            onChange={onChange}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type='submit' className='contact-submit'>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
