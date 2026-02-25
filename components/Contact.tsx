// components/Contact.tsx
'use client';
import { useState, FormEvent } from 'react';

interface FormData { name: string; email: string; course: string; }

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', course: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add validation and API call here
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container form-container">
        <h2 className="section-title">Start Your Journey</h2>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              aria-required="true"
            />
          </div>
          <button type="submit" className="btn btn-primary full-width">Submit Application</button>
        </form>
      </div>
    </section>
  );
}