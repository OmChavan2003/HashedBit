import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import BookingForm from './BookingForm';
import Success from './Success';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-header">
        <h2>🎬 CineMagic Booking</h2>
      </div>
      
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;