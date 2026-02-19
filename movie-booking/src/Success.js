import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const data = location.state; // Grabbing the data passed from BookingForm.js

  // Security check: If someone tries to go to /success directly without booking
  if (!data) return <div className="page-container" style={{textAlign: 'center'}}><h2>No booking found. <Link to="/">Go Home</Link></h2></div>;

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#2ecc71' }}>Booking Successful! 🎉</h1>
      <h2>Ticket ID: #{data.bookingId}</h2>
      
      <div style={{ background: 'white', padding: '30px', borderRadius: '10px', display: 'inline-block', textAlign: 'left', marginTop: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}><strong>Movie:</strong> {data.movieTitle}</p>
        <hr style={{ border: '0.5px solid #eee', marginBottom: '15px' }} />
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
      </div>
      
      <br/>
      <Link to="/" className="book-btn" style={{ marginTop: '30px' }}>Book Another Movie</Link>
    </div>
  );
}

export default Success;