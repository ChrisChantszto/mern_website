import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Chris Chan's Blog</h1>
      <p>
        Welcome to my personal blog, where I share my knowledge and experience in web development. I've built this website using the latest technologies and best practices in the industry, including React, Express, MongoDB Atlas, Node.js, HTML, CSS, JavaScript, and React Router.
      </p>
      <p>
        Dive into the <Link to="/topics">Web Dev topics</Link> section to explore articles about various web development subjects. Feel free to connect with me on my social media accounts:
      </p>
      <div className="social-media-links" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <a href="https://www.linkedin.com/in/chrischantt/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ChrisChantszto/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;