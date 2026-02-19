import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_MOVIES } from './Movies';

function MovieDetails() {
  const { id } = useParams(); // Gets the ID from the URL
  const movie = MOCK_MOVIES.find(m => m.id === parseInt(id));

  if (!movie) return <h2 style={{textAlign: 'center'}}>Movie not found</h2>;

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{ width: '300px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }} />
      <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '1.2rem', color: '#555' }}>
        {movie.description}
      </p>
      
      {/* Goes to Page 3 */}
      <Link to={`/book/${movie.id}`} className="book-btn" style={{ fontSize: '1.1rem', padding: '12px 30px' }}>
        Book Seat
      </Link>
    </div>
  );
}

export default MovieDetails;