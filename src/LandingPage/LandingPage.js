import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Video from '../Video/Fallout.mp4';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <video autoPlay loop muted className="landingpage-video">
        <source src={Video} type="video/mp4" />
      </video>
      <section className="image-landingpage">
        <Link to="/listen">
          <img
            src="images/bleed_on_sunset_artwork.jpg"
            alt="Bleed on Sunset Artwork"
          />
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
