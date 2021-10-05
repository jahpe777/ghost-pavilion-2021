import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <ul className="links">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/GhostPavilion"
          >
            <FaFacebookF className="icons" alt="facebook" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/ghost_pavilion"
          >
            <FaTwitter className="icons" alt="twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ghost_pavilion"
          >
            <FaInstagram className="icons" alt="instagram" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg"
          >
            <FaYoutube className="icons" alt="youtube" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/ghost-pavilion"
          >
            <FaSoundcloud className="icons" alt="soundcloud" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ghostpavilion.bandcamp.com/"
          >
            <FaBandcamp className="icons" alt="bandcamp" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@ghostpavilion.com"
          >
            <FaEnvelope className="icons" alt="email" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
