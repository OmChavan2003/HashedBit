import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Updated with Real Movie Posters and Descriptions!
export const MOCK_MOVIES = [
  { id: 1, title: "Dune: Part Two", image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2TGpiH057.jpg", description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family." },
  { id: 2, title: "Deadpool & Wolverine", image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", description: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy." },
  { id: 3, title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb." },
  { id: 4, title: "Spider-Man: No Way Home", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1R80vESd2bYm63.jpg", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear." },
  { id: 5, title: "Avatar: The Way of Water", image: "https://image.tmdb.org/t/p/w500/t6HIqrHezINNdIE711i2vWCR4P4.jpg", description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started." },
  { id: 6, title: "Joker: Folie à Deux", image: "https://image.tmdb.org/t/p/w500/iflq7ZJfOUOIFPSkvbfFkyfEfx1.jpg", description: "Failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital." },
  { id: 7, title: "Gladiator II", image: "https://image.tmdb.org/t/p/w500/2c7Rk4hQf37aU630g3c4qC1Btvl.jpg", description: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum." },
  { id: 8, title: "The Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption." }
];

function Movies() {
  return (
    <div className="page-container">
      <h1 className="page-title">Now Showing</h1>
      
      <div className="movie-grid">
        {MOCK_MOVIES.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            
            <Link to={`/movie/${movie.id}`} className="book-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;