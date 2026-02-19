import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_MOVIES } from './Movies';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOCK_MOVIES.find(m => m.id === parseInt(id));

  // State to hold the user's input
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random 6-digit booking ID
    const bookingId = Math.floor(Math.random() * 900000) + 100000; 
    
    // Navigate to Success page and pass the form data along with it!
    navigate('/success', { state: { ...formData, bookingId, movieTitle: movie.title } });
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Book Seats for: {movie?.title}</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', gap: '15px', marginTop: '20px' }}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="tel" name="mobile" placeholder="Mobile Number" required onChange={handleChange} style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <button type="submit" className="book-btn" style={{ border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;